class DetoxGet {
  static text(i) {
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxGet"
      },
      method: "text",
      args: [{
        type: "Invocation",
        value: i
      }]
    };
  }

  static height(i) {
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxGet"
      },
      method: "height",
      args: [{
        type: "Invocation",
        value: i
      }]
    };
  }

  static width(i) {
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxGet"
      },
      method: "width",
      args: [{
        type: "Invocation",
        value: i
      }]
    };
  }
}

module.exports = DetoxGet;
