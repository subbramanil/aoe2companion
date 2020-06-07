const fromUnixTime = require('date-fns/fromUnixTime');


function convertTimestampsToDates(json: ILastMatchRaw): ILastMatch {
    return {
        ...json,
        started: fromUnixTime(json.started),
    };
}

export async function fetchLastMatch(game: string, profile_id: string) {
    // const response = await fetch(`https://aoe2.net/api/player/lastmatch?game=${game}&steam_id=${steam_id}`)
    const response = await fetch(`https://aoe2.net/api/player/lastmatch?game=${game}&profile_id=${profile_id}`)
    // console.log("response", response);
    const json = await response.json();
    console.log("response.json()", json);

    return convertTimestampsToDates(json.last_match);
}