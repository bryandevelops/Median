import React from 'react';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.story.title || "",
      body: this.props.story.body || "",
      photoFile: this.props.photoFile || null,
      photoUrl: this.props.photoUrl || null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.props.fetchStory(nextProps.match.params.storyId).fail(err => this.props.history.push("/"));
    }
  }
  
  componentDidMount() {
    if (this.props.formType === "Edit story" && !this.props.currentUser) {
      this.props.history.push("/").fail(err => this.props.history.push("/"));
    }
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("story[title]", this.state.title);
    formData.append("story[body]", this.state.body);

    if (this.state.photoFile) {
      formData.append("story[photo]", this.state.photoFile)
    }

    const method = this.props.formType === "Edit story" ? "PATCH" : "POST"
    const url = method === "PATCH" ? `api/stories/${this.props.story.id}` : "api/stories"

    $.ajax({
      url: url,
      method: method,
      data: formData,
      contentType: false,
      processData: false
    }).then(() => { 
      return this.props.history.push(`/users/${this.props.currentUser.id}`)
    });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteStory(this.props.story.id).then(() => this.props.history.push(`/users/${this.props.currentUser.id}`))
  }

  handleFile(e) {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    }

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    const deleteButton = this.props.formType === "Edit story" ?
      <button className="story-form-delete" onClick={this.handleDelete}>Delete story</button>
      : ""

    const preview = this.state.photoUrl ? <img className="story-form-preview" src={this.state.photoUrl}/> : ""
    
    return(
      <>
        <div className="story-box-shadow"></div>

        <div className="story-form-container">
          <form onSubmit={this.handleSubmit} className="story-form">


              <div id="story-form-submit">
                <input className="story-form-edit" type="submit" value={this.props.formType} />
                {deleteButton}
              </div>
              
            <h6 className="story-form-title">Title</h6>
              <input type="text" value={this.state.title} onChange={this.update("title")} className="story-input-title" placeholder="Title" required/>
              
              <label className="file-upload"><img src="https://median-aa-seeds.s3.amazonaws.com/plus.png"/>
                <input type="file" className="story-input-file" onChange={this.handleFile} required/>
              </label>
              <h3 className="story-form-preview">{preview}</h3>

              <textarea value={this.state.body} onChange={this.update("body")} className="story-input-body" placeholder="Tell your story..." cols="20" required></textarea>
          </form>
        </div>
      </>
    );
  }
}

export default StoryForm;