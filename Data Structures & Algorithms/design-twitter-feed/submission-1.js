class Twitter {
  constructor() {
    this.internalTweetCounter = 0;
    this.tweetsByUser = new Map();
    this.userFollowees = new Map();
  }

  /**
   * @param {number} userId
   * @param {number} tweetId
   * @return {void}
   */
  postTweet(userId, tweetId) {
    if (!this.tweetsByUser.get(userId)) {
      this.tweetsByUser.set(userId, []);
    }
    this.tweetsByUser
      .get(userId)
      .push({ tweetId, internalId: this.internalTweetCounter });
    this.internalTweetCounter++;
  }

  getUserPosts(userId) {
    return this.tweetsByUser.get(userId) ?? [];
  }

  getUserFollowees(userId) {
    return this.userFollowees.get(userId) ?? new Set();
  }

  /**
   * @param {number} userId
   * @return {number[]}
   */
  getNewsFeed(userId) {
    const k = 10;
    const pointers = [];
    const userPostCount = this.getUserPosts(userId).length;
    if (userPostCount > 0) {
      pointers.push([userId, userPostCount - 1]);
    }
    this.getUserFollowees(userId).forEach((id) => {
      const userPostCount = this.getUserPosts(id).length;
      if (userPostCount > 0) {
        pointers.push([id, userPostCount - 1]);
      }
    });
    let posts = [];
    if (pointers.length === 0) {
      return posts;
    }
    let lastMax = -1;
    let lastPointerIndex = -1;
    let consumed = 0;
    while (posts.length < k || consumed === pointers.length) {
      for (let i = 0; i < pointers.length; i++) {
        const [usrId, pointer] = pointers[i];
        if (pointer === -1) {
          continue;
        }
        const lastUserPostTimestamp =
          this.getUserPosts(usrId)[pointer]?.internalId;
        if (lastUserPostTimestamp > lastMax) {
          lastMax = lastUserPostTimestamp;
          lastPointerIndex = i;
        }
        // console.log(lastMax);
      }
      lastMax = -1;
      if (lastPointerIndex !== -1) {
        posts.push(
          this.getUserPosts(pointers[lastPointerIndex][0])[
            pointers[lastPointerIndex][1]
          ].tweetId,
        );
        pointers[lastPointerIndex][1]--;
        if (pointers[lastPointerIndex][1] === -1) {
          consumed++;
          if (consumed === pointers.length) {
            break;
          }
        }
      }
      // console.log("lastPointerIndex", lastPointerIndex);
      // console.log("pointers", pointers);
    }
    return posts;
  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  follow(followerId, followeeId) {
    if (!this.userFollowees.get(followerId)) {
      this.userFollowees.set(followerId, new Set());
    }
    this.userFollowees.get(followerId).add(followeeId);
  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  unfollow(followerId, followeeId) {
    if (!this.userFollowees.get(followerId)) {
      return;
    }
    this.userFollowees.get(followerId).delete(followeeId);
  }
}