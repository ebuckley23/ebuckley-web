module.exports.timestamp = function(schema) {
  schema.add({
    created: Date,
    updated: Date
  });

  schema.pre('save', function(next) {
    this.updated = Date.now;
    next()
  });
}