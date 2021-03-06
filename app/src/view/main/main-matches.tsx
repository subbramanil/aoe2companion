import {ITheme, makeVariants, useTheme} from "../../theming";
import {FlatList, Platform, StyleSheet, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import {RouteProp, useRoute} from "@react-navigation/native";
import {RootTabParamList} from "../../../App";
import {Game} from "../components/game";
import RefreshControlThemed from "../components/refresh-control-themed";
import {clearMatchesPlayer, FinalDarkMode, setLoadingMatchesOrStats, useMutate, useSelector} from "../../redux/reducer";
import {Checkbox, Searchbar} from "react-native-paper";
import {MyText} from "../components/my-text";
import {appVariants} from "../../styles";
import {LeaderboardId} from "../../helper/leaderboards";
import TemplatePicker from "../components/template-picker";
import {get} from "lodash-es";
import {IMatch} from "../../helper/data";
import {getMapName} from "../../helper/maps";
import {parseUserId, sameUser} from "../../helper/user";


export default function MainMatches() {
    const styles = useTheme(variants);
    const appStyles = useTheme(appVariants);
    const [text, setText] = useState('');
    const mutate = useMutate();
    const [leaderboardId, setLeaderboardId] = useState<LeaderboardId>();
    const [filteredMatches, setFilteredMatches] = useState<IMatch[]>();
    const [withMe, setWithMe] = useState(false);

    const auth = useSelector(state => state.auth);

    const route = useRoute<RouteProp<RootTabParamList, 'MainProfile'>>();
    const user = parseUserId(route.params.user);

    const matches = useSelector(state => get(state.user, [user.id, 'matches']));

    useEffect(() => {
        if (matches == null) return;

        let filtered = matches;

        if (leaderboardId != null) {
            filtered = filtered.filter(m => m.leaderboard_id == leaderboardId);
        }

        if (text.trim().length > 0) {
            const parts = text.toLowerCase().split(' ');
            filtered = filtered.filter(m => {
                return parts.every(part => {
                    return m.name.toLowerCase().indexOf(part) >= 0 ||
                        (getMapName(m.map_type) || '').toLowerCase().indexOf(part) >= 0 ||
                        m.players.some(p => p.name?.toLowerCase().indexOf(part) >= 0);
                });
            });
        }

        if (withMe && auth) {
            filtered = filtered.filter(m => m.players.some(p => sameUser(p, auth)));
        }

        setFilteredMatches(filtered);
    }, [text, leaderboardId, withMe, matches]);

    const list = [...(filteredMatches ? ['header'] : []), ...(filteredMatches || Array(15).fill(null))];

    const toggleWithMe = () => setWithMe(!withMe);

    const onLeaderboardSelected = async (selLeaderboardId: LeaderboardId) => {
        console.log('==>', leaderboardId, selLeaderboardId);
        if (leaderboardId === selLeaderboardId) {
            setLeaderboardId(undefined);
        } else {
            setLeaderboardId(selLeaderboardId);
        }
    };

    const values: number[] = [
        3,
        4,
        1,
        2,
        0,
    ];

    const valueMapping: any = {
        0: {
            title: 'UNR',
            subtitle: 'Unranked',
        },
        3: {
            title: 'RM',
            subtitle: '1v1',
        },
        4: {
            title: 'RM',
            subtitle: 'Team',
        },
        1: {
            title: 'DM',
            subtitle: '1v1',
        },
        2: {
            title: 'DM',
            subtitle: 'Team',
        },
    };

    const renderLeaderboard = (value: LeaderboardId, selected: boolean) => {
        return <View style={styles.col}>
            <MyText style={[styles.h1, { fontWeight: selected ? 'bold' : 'normal'}]}>{valueMapping[value].title}</MyText>
            <MyText style={[styles.h2, { fontWeight: selected ? 'bold' : 'normal'}]}>{valueMapping[value].subtitle}</MyText>
        </View>;
    };

    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        if (matches) {
            setRefreshing(false);
        }
    }, [matches])

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.pickerRow}>
                    <TemplatePicker value={leaderboardId} values={values} template={renderLeaderboard} onSelect={onLeaderboardSelected}/>
                    <View style={appStyles.expanded}/>
                    {
                        auth && !sameUser(user, auth) &&
                        <View style={styles.row}>
                            <Checkbox.Android
                                status={withMe ? 'checked' : 'unchecked'}
                                onPress={toggleWithMe}
                            />
                            <TouchableOpacity onPress={toggleWithMe}>
                                <MyText>w/ me</MyText>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
                <Searchbar
                    style={styles.searchbar}
                    placeholder="name, map, player"
                    onChangeText={text => setText(text)}
                    value={text}
                />
                <FlatList
                    contentContainerStyle={styles.list}
                    initialNumToRender={10}
                    windowSize={2}
                    data={list}
                    renderItem={({item, index}) => {
                        switch (item) {
                            case 'header':
                                return <MyText style={styles.header}>{filteredMatches?.length} matches</MyText>
                            default:
                                return <Game data={item as any} expanded={index === -1} highlightedUsers={[user]} user={user}/>;
                        }
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    refreshControl={
                        <RefreshControlThemed
                            onRefresh={async () => {
                                setRefreshing(true);
                                await mutate(clearMatchesPlayer(user));
                                await mutate(setLoadingMatchesOrStats());
                            }}
                            refreshing={refreshing}
                        />
                    }
                />
            </View>
        </View>
    );
}


const getStyles = (theme: ITheme, mode: FinalDarkMode) => {
    return StyleSheet.create({
        searchbar: {
            marginTop: Platform.select({ ios: mode == 'light' ? 0 : 0 }),
            borderRadius: 0,
            paddingHorizontal: 10,
        },
        header: {
            textAlign: 'center',
            marginBottom: 15,
        },

        info: {
            // textAlign: 'center',
            marginBottom: 10,
            marginLeft: 5,
            // color: theme.textNoteColor,
            // fontSize: 12,
        },

        row: {
            flexDirection: 'row',
            paddingHorizontal: 7,
            alignItems: 'center',
        },
        col: {
            paddingHorizontal: 7,
            alignItems: 'center',
        },
        h1: {

        },
        h2: {
            fontSize: 11,
        },

        pickerRow: {
            // backgroundColor: 'yellow',
            flexDirection: 'row',
            // justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 20,
            marginBottom: 20,
            marginTop: 20,
        },
        sectionHeader: {
            marginVertical: 25,
            fontSize: 15,
            fontWeight: '500',
            textAlign: 'center',
        },
        list: {
            padding: 20,
        },
        container: {
            flex: 1,
            // backgroundColor: '#B89579',
        },
        content: {
            flex: 1,
        },
    });
};

const variants = makeVariants(getStyles);
