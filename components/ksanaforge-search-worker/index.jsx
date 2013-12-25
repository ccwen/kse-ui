var searchworker = React.createClass({
  mixins:Require('react-mixins'), //introduce this.$yase
  shouldComponentUpdate:function(nextProps, nextState) {
    //this is important , otherwise render will keep calling yase
    return nextProps.db!=this.props.db || nextProps.query!=this.props.query; 
  },
  getDefaultProps:function() {
    return { onResultReady:function(){} };
  },
  render: function() {
    //call to search engine
    this.$yase("search",{db:this.props.db,query:this.props.query,output:["text"]})
        .done(function(data){
        //notify when search result ready
        this.props.onResultReady(data);
    })
    return (React.DOM.div({})); //not using jsx
  }
});
module.exports=searchworker;