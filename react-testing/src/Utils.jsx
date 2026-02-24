function computeDelay(attempt, baseDelay){
    return baseDelay * Math.pow(2, attempt);
}

export default function getDelay(attempt, baseDelay, maxDelay) {
  const delay = computeDelay(attempt, baseDelay)
  
  return Math.min(delay, maxDelay);
}