function breakingRecords(scores) {
  let maxScore = scores[0];
  let minScore = scores[0];
  let counterMax = 0;
  let counterMin = 0;
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > maxScore) {
      maxScore = scores[i];
      counterMax++;
    } else if (scores[i] < minScore) {
      minScore = scores[i];
      counterMin++;
    }
  }
  return [counterMax, counterMin];
}
