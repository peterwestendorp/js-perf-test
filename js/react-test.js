var reactTestData = [],
    reactItemCount = 999,
    reactStart;

var Tag = React.createClass({
  render: function() {
    return <li>{this.props.tag.title}</li>;
  }
});

var TagList = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.tags.map(function (t) {
          return <Tag tag={t}></Tag>
        })}
      </ul>
    );
  },
  componentDidMount: function(){
    console.log("mounted");
    document.getElementById('react-timer').innerHTML = reactItemCount+' items in '+((new Date().getTime())-reactStart)+' miliseconds';
  },
  componentDidUpdate: function(){
    console.log("updated");
    document.getElementById('react-timer').innerHTML = reactItemCount+' items in '+((new Date().getTime())-reactStart)+' miliseconds';
  }
});

function startReactTest(){
  reactTestData = [];

  for(var i = 0; i < reactItemCount; i++){
    reactTestData.push({
      done: false,
      title: 'item '+Math.round(Math.random()*100)
    });
  }

  reactStart = new Date().getTime();

  React.render(
    <TagList tags={reactTestData}></TagList>,
    document.getElementById('react-test')
  );
}
