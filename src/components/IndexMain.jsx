import React from 'react';
import * as actionCreators from '../actions'
import {connect} from 'react-redux'
import {Link} from "react-router-dom"
import Responsive from 'react-responsive'
import _ from 'lodash'
import {Button, Row, Col, Card, Table, Steps, Icon, notification} from 'antd'


const Background = "../../static/img/cover.jpg"
const innerHeight = window.innerHeight

const coverStyle = {
  // margin: "-10px",
  width: "100%",
  height: innerHeight + 'px',
  // height: (innerHeight - 64) + 'px',
  backgroundImage: "url(" + Background + ")",
  display: "table",
  position: "relative",
  WebkitBackgroundSize: "cover",
  MozBackgroundSize: "cover",
  backgroundSize: "100% 100%",
  OBackgroundSize: "cover",
};

const textStyle = {
  color: "white",
  fontSize: "40px",
  textAlign: "center",
  paddingTop: (innerHeight / 2) - 64
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

const fontStyle3 = {
  color: "black",
  fontSize: "30px",
  margin: "10px",
  textAlign: "center",
}

const fontStyle4 = {
  color: "black",
  fontSize: "20px",
  margin: "10px",
  textAlign: "center",
}

const hrStyle = {
  width:"8px",
  margin: "5px",
  height: "3px",
  backgroundColor: "#108ee9"
}

const sectionStyle1 = {
  margin: "30px",
  padding: "30px",
}

const sectionStyle2 = {
  margin: "30px",
  padding: "0px",
}

const sectionTextStyle = {
  textAlign: "center",
  margin: "30px"
}

const cardStyle = { 
  width: "240px",
  margin: "10px"
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

const openNotification = () => {
  notification.open({
    message: 'Pycone松果城市 Email',
    description: '想要更多嗎?歡迎聯絡我們。pycone2016@gmail.com',
    icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
  })
}

const Desktop = ({children}) => <Responsive minWidth={992} children={children}/>;
const Tablet = ({children}) => <Responsive minWidth={768} maxWidth={992} children={children}/>;
const Mobile = ({children}) => <Responsive maxWidth={768} children={children}/>;
const Default = ({children}) => <Responsive minWidth={768} children={children}/>;

class IndexMain extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickButton = this.handleClickButton.bind(this)
  }

  handleClickButton() {
    this.props.addTest('123321')
  }

  render() {
    const Step = Steps.Step
    return (
      <div className="ant-layout-content">
        <section style={coverStyle}>
          <div style={textStyle}>
            <Row type="flex" justify="center">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <h1 style={fontStyle1}>最有趣的Python線上課程</h1>
                <h4 style={fontStyle2}>一起來學習Python吧!</h4>
                <Button type="primary" size={'large'}>
                  <a href="https://hahow.in/cr/pydataml" target="_blank" className="btn btn-info btn-raised btn-lg">
                    <i className="fa fa-rocket"></i> 立即加入課程募資!
                  </a>
                </Button> 
              </Col>
            </Row>      
          </div>         
        </section>
        {/*<section style={coverStyle}>
          <div style={textStyle}>
            <Row type="flex" justify="center">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <h1 style={fontStyle1}>最有趣的Python線上課程</h1>
                <h4 style={fontStyle2}>一起來學習Python吧!</h4>
                <Button type="primary" size={'large'}>
                  <a href="https://hahow.in/cr/pydataml" target="_blank" className="btn btn-info btn-raised btn-lg">
                    <i className="fa fa-rocket"></i> 立即加入課程募資!
                  </a>
                </Button> 
              </Col>
            </Row>      
          </div>         
        </section>*/}

         <section style={sectionStyle1}>
           <Row type="flex">
             <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div style={sectionTextStyle}>
                <h1>Pycone松果城市</h1>
                <h3>啟動企業的商業價值</h3>
                {/*<hr style={hrStyle}/>*/}
              </div>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col offset={2} xs={22} sm={22} md={22} lg={8} xl={8}>
              <div style={{padding: "10px"}}>
                <h1>打造專屬商業應用，就從Pycone松果城市開始！</h1>
                <h3>松果城市提供網站開發、APP開發與資料分析，讓我們幫你描繪成功的藍圖</h3>
              </div>
            </Col>
            <Col offset={2} xs={22} sm={22} md={22} lg={12} xl={12}>
              <div style={{padding: "5px"}}>
                <img style={{width: "100%"}} src="../../static/img/card-project4.jpg" alt=""/>
              </div>
            </Col>
          </Row>
        </section>

        <section style={sectionStyle1}>
          <Row type="flex">
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div style={sectionTextStyle}>
                <h1>產品服務</h1>
                <h3>提供教學與商業系統客製化服務</h3>
              </div>
            </Col>
            <Col offset={2} xs={22} sm={22} md={22} lg={10} xl={10}>
              <div style={{padding: "10px"}}>
                <i className="fa fa-graduation-cap fa-4x" aria-hidden="true"/>
                <h1>線上程式教學與專案服導</h1>
                <p>Python初學者線上課程</p>
              </div>
            </Col>
            <Col offset={2} xs={22} sm={22} md={22} lg={10} xl={10}>
              <div style={{padding: "10px"}}>
                <i className="fa fa-desktop fa-4x" aria-hidden="true"/>
                <h1>網站開發</h1>
                <p>基本形象網站、RWD網頁、電子商務網站</p>    
              </div>
            </Col>
            <Col offset={2} xs={22} sm={22} md={22} lg={10} xl={10}>
              <div style={{padding: "10px"}}>
                <i className="fa fa-mobile fa-4x" aria-hidden="true"/>
                <h1>行動App開發</h1>
                <p>Android與iOS行動應用</p>
              </div>
            </Col>
            <Col offset={2} xs={22} sm={22} md={22} lg={10} xl={10}>
              <div style={{padding: "10px"}}>
                <i className="fa fa-bar-chart fa-4x" aria-hidden="true"/>
                <h1>資料分析</h1>
                <p>數據分析、網路輿情分析</p>
              </div>
            </Col>
          </Row>
        </section>

        <section style={sectionStyle1}>
          <Row type="flex">
             <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div style={sectionTextStyle}>
                <h1>Python線上課程</h1>
                <h3>最有趣的Python線上課程</h3>
                {/*<hr style={hrStyle}/>*/}
              </div>
            </Col>
          </Row>
          <Row type="flex">
          <Col offset={2} xs={22} sm={22} md={22} lg={6} xl={6}>
            <a href="https://hahow.in/cr/python-for-beginners">     
              <Card style={cardStyle} bodyStyle={{ padding: 0 }}>
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
            <Col offset={2} xs={22} sm={22} md={22} lg={6} xl={6}>      
              <a href="https://hahow.in/cr/python-web-crawler">             
                <Card style={cardStyle} bodyStyle={{ padding: 0 }}>
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
            <Col offset={2} xs={22} sm={22} md={22} lg={6} xl={6}>
              <a href="https://hahow.in/cr/pydataml">
                <Card style={cardStyle} bodyStyle={{ padding: 0 }}>
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

        <section style={sectionStyle2}>
          <Row type="flex">
             <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div style={sectionTextStyle}>
                <h1>資料科學家課程</h1>
                <h3>學習成為資料科學家的技能</h3>
              </div>
            </Col>
          </Row>
          <Row type="flex">
            {/*<div>123</div>*/}
            <Desktop>
              <Col offset={2} xs={20} sm={20} md={20} lg={20} xl={20}>
                
                <Steps>
                  <Step status="finish" title="初心者 - python入門" icon={<Icon type="user" />} />      
                  <Step status="finish" title="Python 網頁爬蟲入門實戰" icon={<Icon type="solution" />} />
                  <Step status="finish" title="Python 資料分析＆機器學習入門" icon={<Icon type="area-chart" />} />
                  <Step status="finish" title="資料科學家" icon={<Icon type="smile-o" />} />
                </Steps> 
              </Col>
            </Desktop>
            <Tablet>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Steps>
                  <Step status="finish" title="初心者 - python入門" icon={<Icon type="user" />} />      
                  <Step status="finish" title="Python 網頁爬蟲入門實戰" icon={<Icon type="solution" />} />
                  <Step status="finish" title="Python 資料分析＆機器學習入門" icon={<Icon type="area-chart" />} />
                  <Step status="finish" title="資料科學家" icon={<Icon type="smile-o" />} />
                </Steps> 
              </Col>
            </Tablet>
            <Mobile>
              <Col offset={4} xs={22} sm={22} md={22} lg={22} xl={22}>
                <Steps direction="vertical" current={1}>
                  <Step status="finish" title="初心者 - python入門" icon={<Icon type="user" />} />      
                  <Step status="finish" title="Python 網頁爬蟲入門實戰" icon={<Icon type="solution" />} />
                  <Step status="finish" title="Python 資料分析＆機器學習入門" icon={<Icon type="area-chart" />} />
                  <Step status="finish" title="資料科學家" icon={<Icon type="smile-o" />} />
                </Steps>
              </Col>
            </Mobile>
            <Default></Default> 
          </Row>
        </section>

        {/*<section style={sectionStyle1}>
          <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              
            </Col>
          </Row>
        </section>*/}

        <section style={sectionStyle1}>
          <Row type="flex">
             <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div style={sectionTextStyle}>
                <h1>聯絡我們</h1>
                {/*<hr style={hrStyle}/>*/}
              </div>
              </Col>
            </Row>
          <Row type="flex" justify="center"> 
            <Col>
              <a href="mailto:pycone2016@gmail.com?Subject=Hello%20pycone" target="_top"><Button type="primary" size={"large"} style={{margin:"5px"}} onClick={openNotification}>Email us</Button></a>
              <a href="https://www.facebook.com/pycone2016/" target="_blank"><Button size={"large"} type="primary">Facebook</Button></a>
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
