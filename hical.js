const meetingsArray = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
];

function mergeRanges(meetings) {
    // Sort array by start time
    meetings.sort((a, b) => a.startTime - b.startTime);

    // Set result array with first meeting
    let mergedMeetings = [meetings[0]];

    // Loop through rest of meetings
    for (let i = 1; i < meetings.length; i++) {
        // Set variable for checking if it's been merged
        let merged = false;

        // Last merged meeting
        let lastMerged = mergedMeetings[mergedMeetings.length - 1];

        // If the current meeting's startTime is greater than or equal to the lastMerged's startTime AND the current meeting's endTime is less than or equal to the lastMerged's endTime, it is totally within the range of the lastMerged, and can be considered merged
        if (meetings[i].startTime >= lastMerged.startTime && meetings[i].endTime <= lastMerged.endTime) {
            merged = true;
        }
        // If the current meeting's startTime is less than the lastMerged's endTime AND the current  meeting's endTime is greater than the lastMerged's endTime, the lastMerged's endTime can be changed to the current meeting's endTime, and the meetings are now merged
        else if (meetings[i].startTime <= lastMerged.endTime && meetings[i].endTime > lastMerged.endTime) {
            lastMerged.endTime = meetings[i].endTime;
            merged = true;
        }

        // If this current meeting could not be merged, we push it to the mergedMeetings
        if (merged === false) {
            mergedMeetings.push(meetings[i])
        }

    }

    return mergedMeetings;
}

console.log(mergeRanges(meetingsArray));