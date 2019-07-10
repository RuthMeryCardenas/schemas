module.exports = (conn) => {
  const ReviewerSurveySchema = new conn.Schema({
    questions: {
      type: [conn.Schema.Types.ObjectId],
      ref: 'ReviewQuestion',
      required: true,
    },
    version: {
      type: String,
      required: true,
    },
  }, { collection: 'reviewer_surveys' });

  return ReviewerSurveySchema;
};
