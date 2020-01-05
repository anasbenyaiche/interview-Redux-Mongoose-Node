import React from 'react';


class Modal extends React.Component{
  render(){
    return(<>
    <div id="ex1" class="modal">
  <div>{this.props.children}</div>
  <a href="#" rel="modal:close">Close</a>
</div>


<p><a href="#ex1" rel="modal:open">Open Modal</a></p>
    </>)
  }
}