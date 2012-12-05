(function() {
  // node modules should probably do this
  if (process.env.NODE_MODULES_PATH)
    NodeModules.setPath(process.env.NODE_MODULES_PATH);
  
  Meteor.Profiler = {
    allow: function(userId) {
      return true;
    }
  };
  
  Meteor.methods({
    resumeProfile: function() {
      var profiler = NodeModules.require('profiler');
      
      console.log('-- Resuming profile');
      Meteor.Profiler.allow(this.userId) && profiler.resume();
    },
    pauseProfile: function() {
      var profiler = NodeModules.require('profiler');
      
      console.log('-- Pausing profile');
      Meteor.Profiler.allow(this.userId) && profiler.pause();
    }
  });
}());