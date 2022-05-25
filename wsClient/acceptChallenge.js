/**
 * Returns an accept_challenge response to server.
 * 
 * @param {Object} obj is the object received from the server 
 * @returns an object which is an accept_challenge response.
 */

function acceptChallenge(obj) {

  // uncomment for accept challenges of nameHere only
  /*
  if (obj.player !== 'nameHere') {
    return ' ';
  }
  */

  const response = {
    action: "accept_challenge",
    data: {
      challenge_id: obj.data.challenge_id
    }
  }

  return response;
}

const sampleMessage = {
  event: "challenge",
  data: {
    opponent: "eldalai@gmail.com",
    challenge_id: "fb586191-867e-46d9-8476-d7bf0cbdc8be"
  }
}


module.exports = acceptChallenge;