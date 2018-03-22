import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  renderField(field) {
    const { label, meta: { touched, error } } = field;
    const inputClassList = `form-control ${touched && error
      ? "has-danger"
      : ""}`;

    return (
      <div className="form-group">
        <label>{label}</label>
        <input className={inputClassList} type="text" {...field.input} />

        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field label="Title" name="title" component={this.renderField} />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.categories) {
    errors.categories = "Enter at least one category";
  }
  if (!values.content) {
    errors.content = "Content is required";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(PostsNew);
