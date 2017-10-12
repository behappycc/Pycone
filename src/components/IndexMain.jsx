import React from 'react';
import * as actionCreators from '../actions'
import {connect} from 'react-redux'
import {Link} from "react-router-dom"
import _ from 'lodash'
import {Button, Row, Col, Card, Table} from 'antd'


const Background = "../../static/img/cover.jpg"
const innerHeight = window.innerHeight

const coverStyle = {
  margin: "-10px",
  width: "100%",
  height: (innerHeight - 64) + 'px',
  border: "0px",
  backgroundImage: "url(" + Background + ")",
  display: "table",
  position: "relative",
  WebkitBackgroundSize: "cover",
  MozBackgroundSize: "cover",
  backgroundSize: "cover",
  OBackgroundSize: "cover",
};

const textStyle = {
  color: "white",
  fontSize: "40px",
  textAlign: "center",
  padding: (innerHeight / 2) - 64
}

const fontStyle1 = {
  color: "white",
  fontSize: "40px",
  textAlign: "center",
}

const fontStyle2 = {
  color: "white",
  fontSize: "30px",
  textAlign: "center",
}

const courseSectionStyle = {
  margin: "20px",
  padding: "20px"
};

const featureSectionStyle = {
  padding: "30px",
  backgroundColor: "#fff"
}

const customImageStyle = {
  display: "block",
  width: "100%",
  height: "auto"
}
const customCardStyle = {
  padding: '10px 16px'
}
const customCardPStyle = {
  color: '#999'
}


class IndexMain extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickButton = this.handleClickButton.bind(this)
  }

  handleClickButton() {
    this.props.addTest('123321')
  }

  render() {
    return (
      <div className="ant-layout-content">
        <section style={coverStyle}>
          <div style={textStyle}>
            <h1 style={fontStyle1}>最有趣的Python線上課程</h1>
            <h4 style={fontStyle2}>一起來學習Python吧!</h4>
            <Button type="primary" size={'large'}>
              <a href="https://hahow.in/cr/pydataml" target="_blank" class="btn btn-info btn-raised btn-lg">
                <i className="fa fa-rocket"></i> 立即加入課程募資!
              </a>
            </Button>
            
          </div>
          
          
        </section>

        <section style={courseSectionStyle}>
          
          <Row type="flex" justify="center" gutter={16}>
          <Col span={8}>
            <a href="https://hahow.in/cr/python-for-beginners">     
              <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                <div style={customImageStyle}>
                  <img style={customImageStyle} alt="example" width="100%" src="../../static/img/python-for-beginners.png" />
                </div>
                <div style={customCardStyle}>
                  <h3>初心者 - python入門</h3>
                  <p style={customCardPStyle}>如果自己常常翻閱書籍卻無法掌握重點，上網收集資料卻覺得太過片段，
                                想要自己動手寫寫看，卻不知道如何開始。這們課會從最基本的環境架設開始教起講解資料型態, 資料結構, 函式, 物件導向, 測試等程式基礎。讓所有同學都可以深入淺出一窺Python的奧妙，更透過實務專題練習的方式，使學生可以應用課堂所學來完成一個Python軟體。</p>
                </div>
              </Card>            
            </a> 
            </Col>
            <Col span={8}>      
              <a href="https://hahow.in/cr/python-web-crawler">             
                <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                  <div style={customImageStyle}>
                    <img style={customImageStyle} alt="example" width="100%" src="../../static/img/python-web-crawler.png" />
                  </div>
                  <div style={customCardStyle}>
                    <h3>Python 網頁爬蟲入門實戰</h3>
                    <p style={customCardPStyle}>你想自動擷取網站上的資料嗎？你學了 Python 卻不知道該從什麼程式開始練習嗎？這堂課就是為你準備的！本課程會循序漸進地說明如何撰寫 Python 網頁爬蟲，從環境設定開始，涵蓋網頁解構、資料擷取與儲存，及多項實戰演練，讓你在學習過程中及對於學習成果都有滿滿的成就感。</p>
                  </div>
                </Card>
              </a>
            </Col>
            <Col span={8}>
              <a href="https://hahow.in/cr/pydataml">
                <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                  <div style={customImageStyle}>
                    <img style={customImageStyle} alt="example" width="100%" src="../../static/img/pydataml.jpg" />
                  </div>
                  <div style={customCardStyle}>
                    <h3>Python 資料分析＆機器學習入門</h3>
                    <p style={customCardPStyle}>這門課主要分為三部分：
1. 資料分析
在一開始我們將介紹最適合資料科學家的分析工具Jupyter Notebook以及Python最基礎的資料處理套件Pandas，
並介紹一些實務上常用資料前處理以及資料分析技巧，最後運用視覺化的套件像是Matplot, Seaborn, Plotly來進行酷炫的視覺化呈現
2. 機器學習
接著我們會介紹如何使用Scikit-Learn來實作常見的機器學習Model，
像是Linear Regression、Logistic Regression、SVM以及Random forest
3. 實戰演練
在實戰演練部分我們會帶領大家實際參加Kaggle的競賽
Kaggle是全世界最大的資料科學家的社群，上面有許多企業舉辦資料分析比賽像是Google, Facebook, Amazon等等，並且許多高手會在討論區分享自己是如何得名的技巧，學會研究Kaggle上面的比賽是一個讓自己快速進步的方法</p>
                  </div>
                </Card>
              </a>  
            </Col>
          </Row>
        </section>

        <section style={courseSectionStyle}>
          <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              
            </Col>
          </Row>
        </section>

        <section style={featureSectionStyle}>
          <Row type="flex">
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div style={{textAlign: "center"}}>
                <h1>Pycone FEATURES</h1>
                <h3>123</h3>
              </div>
            </Col>
            <Col offset={2} xs={22} sm={22} md={22} lg={10} xl={10}>
              <div style={{padding: "10px"}}>
                <i className="fa fa-github fa-4x" aria-hidden="true"/>
                <h1>Exchange</h1>
                <p>123321123321</p>
              </div>
            </Col>
            <Col offset={2} xs={22} sm={22} md={22} lg={10} xl={10}>
              <div style={{padding: "10px"}}>
                <i className="fa fa-github fa-4x" aria-hidden="true"/>
                <h1>Exchange</h1>
                <p>123321123321</p>
              </div>
            </Col>
            <Col offset={2} xs={22} sm={22} md={22} lg={10} xl={10}>
              <div style={{padding: "10px"}}>
                <i className="fa fa-github fa-4x" aria-hidden="true"/>
                <h1>Exchange</h1>
                <p>123321123321</p>
              </div>
            </Col>
            <Col offset={2} xs={22} sm={22} md={22} lg={10} xl={10}>
              <div style={{padding: "10px"}}>
                <i className="fa fa-github fa-4x" aria-hidden="true"/>
                <h1>Exchange</h1>
                <p>123321123321</p>
              </div>
            </Col>
          </Row>
          <Row type="flex">
            <Col offset={2} xs={22} sm={22} md={22} lg={8} xl={8}>
              <div style={{padding: "10px"}}>
                <h1>123</h1>
                <h3>123</h3>
                <div>123</div>
              </div>
            </Col>
            <Col offset={2} xs={22} sm={22} md={22} lg={12} xl={12}>
              <div style={{padding: "50px"}}>
                <img style={{width: "100%"}} src="../../static/img/cover.jpg" alt=""/>
              </div>
            </Col>
          </Row>
        </section>
      </div>
    )
  }
}

const mapStateToProps = store => (
  {
    testReducer: store.testReducer,
  }
);

export default connect(mapStateToProps, actionCreators)(IndexMain)
