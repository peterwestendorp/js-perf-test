var reactTestData = [],
    reactItemCount = 999,
    reactStart;

var TagList = React.createClass({
  render: function() {
    var tagNodes = this.props.tags.map(function (tag) {
      return <div key={tag.id}><span>{tag.title}</span></div>;
    });
    return (
      <div>
        {tagNodes}
      </div>
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
