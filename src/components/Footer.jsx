import React from 'react';

const footerStyle = {
  textAlign: 'center',
  backgroundColor: '#404040',
  padding:'20px'
}

class Footer extends React.Component {
  render() {
    return (
      <div className="ant-layout-footer" style={footerStyle}>
        <div style={{color: "white"}}>Design ©2017 Created by Pycone松果城市 </div>
      </div>
    )
  }
}

export default Footer