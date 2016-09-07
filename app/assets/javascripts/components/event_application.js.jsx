var EventApplication = React.createClass({
  render: function() {
    return(
    <div className="container">
      <div className="jumbotron">
        <h1>ReactJS Initiation</h1>
        <p>By J Rho</p>
      </div>
      <div className="row">
        <div className="col-md-12">
          <EventTable/>
        </div>
      </div>
    </div>
  )
  }
});
