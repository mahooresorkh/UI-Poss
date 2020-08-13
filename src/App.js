import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { Button, Input } from 'antd';
import pencil from './images/pencil.png';
import {buttonStyle, buttonText, buttonImg, deleteButtonStyle, 
  deleteButtonText, circleButtonImg, circleButtonStyle, cardDiv,
  cardHeader, cardBody, cardHeaderRegNo, cardHeaderFlex, dropDownButtonText,
  dropDownButton, sortDownIcon, inputBox, inputLabel, inputSelf} 
  from './supplementaryStyles';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      togglerWindowIsVisible:true,
      togglerWindow:{}
      
    }
  }
  togglerWindowHeight = null;
  componentDidMount(){
    this.togglerWindowHeight = document.getElementById('toggler').offsetHeight;
    this.setState({togglerWindow:{
      transition: 'height 2s ease-out',
      overflowY:'hidden',
      height:`${this.togglerWindowHeight}px`
    }})
  }  
  showDetails = () =>{
    if(this.state.togglerWindowIsVisible){
      this.setState({togglerWindow:{
        transition: 'height 2s ease-out',
        overflowY:'hidden',
        height:'0'}
      })
        
    }
    else{
      this.setState({togglerWindow:{
        transition: 'height 2s ease-out',
        overflowY:'hidden',
        height: this.togglerWindowHeight
      }
      })
    }

    this.setState({togglerWindowIsVisible:!this.state.togglerWindowIsVisible})
  }
  render(){
  return (
    <div className="App">
      <div className='navbar'>
        <Button type="primary" style={buttonStyle}>
          <img src={pencil} style={buttonImg} />
          <span style={buttonText}>امضا</span>
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="primary" style={buttonStyle}>
          <img src={pencil} style={buttonImg} />
          <span style={buttonText}>کپی</span>
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="primary" style={buttonStyle}>
          <img src={pencil} style={buttonImg} />
          <span style={buttonText}>بایگانی</span>
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="primary" style={buttonStyle}>
          <img src={pencil} style={buttonImg} />
          <span style={buttonText}>تایید</span>
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="primary" style={buttonStyle}>
          <img src={pencil} style={buttonImg} />
          <span style={buttonText}>ویرایش</span>
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="primary" style={deleteButtonStyle}>
          <span style={deleteButtonText}>حذف</span>
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {/* 
        npm i --save @fortawesome/fontawesome-svg-core
        npm install --save @fortawesome/free-solid-svg-icons
        npm install --save @fortawesome/react-fontawesome */}
        <Button type="primary" style={circleButtonStyle}>
          <FontAwesomeIcon icon={faHome} size="lg"/>
        </Button>
      </div>
      <br/>
      <div>
        <div style={cardDiv}>
          <div style={cardHeader}>
            <div style={cardHeaderFlex}> 
              <div>1399/05/23</div>
              <div>در سدهٔ نوزدهم م، رویارویی با استعمار اروپای مدرن</div>
            </div>
            <div style={cardHeaderRegNo}>654132135432</div> 
          </div>
          
          <div style={cardBody}>
          سرزمین ایران، میزبان تمدن‌های کهنی چون ایلام، جیرفت و زاینده‌رود بوده‌است. نخستین‌بار در سدهٔ هفتم پیش از میلاد، در دوران پادشاهی ماد بود که بخش‌های قابل توجهی از فلات ایران یکپارچه شد. در سدهٔ ششم پ. م، شاهنشاهی هخامنشی توسط کوروش بزرگ بنیان نهاده شد تا ایران یکی از بزرگ‌ترین امپراتوری‌های تاریخ را تشکیل دهد. در سدهٔ چهارم پ. م، اسکندر مقدونی این امپراتوری را پایان داد و ایران به بخشی از ممالک هلنیستی تبدیل شد. پدیداری شاهنشاهی اشکانی در سدهٔ سوم پ. م، بار دیگر این کشور را تحت فرمان یک شاهنشاهی ایرانی قرار داد. در سدهٔ سوم م، شاهنشاهی ساسانی، یک امپراتوری گستردهٔ دیگر، در ایران به قدرت رسید و برای چهار سده بر سرزمینی پهناور حکومت کرد و مزدیسنا به دین غالب آن، تبدیل شد. ایران در این دوران نیز درگیر جنگ‌های مستمر و فرساینده با روم بود که به تضعیف کشور انجامید. در میانه‌های سدهٔ هفتم م، مسلمانان، امپراتوری ساسانی را سرنگون کردند و اسلام را به جای دین‌های ایرانی، رواج دادند. از دوران خلافت اسلامی تا سدهٔ سیزدهم، فعالیت‌های ادبی، علمی و هنری ایرانی نه تنها پایان نیافت، بلکه بار دیگر به شکوفایی رسید و ایرانیان مشارکتی اثرگذار در شکل‌گیری دوران طلایی اسلام داشتند. از سدهٔ نهم م، میان‌دورهٔ ایرانی آغاز شد و نخستین حکومت‌های ایرانی‌تبار پس از اسلام، پدیدار شدند. در سدهٔ دهم م، اقوام ترک به این کشور آمدند و حکومت‌هایی را تشکیل دادند که بر بخش بزرگی از ایران، حکومت می‌کردند. از سدهٔ ۱۳ م، حملهٔ مغول به ایران روی داد که به تشکیل ایلخانان انجامید و پس از آن، امپراتوری تیموری پدیدار شد.
          با پدیداری صفویان، رونق اقتصادی و پایداری مرزها نمود بیشتری یافت و ایران پس از حدود ۹ سده، تحت یک حکومت مستقل بومی، متحد شد و مذهب آن به شیعه تغییر یافت. پس از سرنگونی صفویان، دودمان‌های افشاریان و زندیان به ترتیب بر ایران، فرمان راندند. در دوران قاجاریان، جنگ‌هایی با روسیه انجام شد که سرزمین‌های قابل توجهی را از این کشور جدا کرد؛ در سدهٔ نوزدهم م، رویارویی با استعمار اروپای مدرن، حاکمیت ملی را تضعیف کرد. در دههٔ ۱۲۸۰، جنبش مشروطهٔ ایران قدرت گرفت و قانون اساسی مشروطه را بر این کشور، حاکم کرد. در سال ۱۳۰۴، شاهنشاهی پهلوی توسط رضاشاه بنیان نهاده شد، این دوران با اصلاحات گسترده و ایجاد زیرساخت نوین برای ایران، همراه شد. دوران محمدرضا پهلوی اصلاحات ادامه یافت و ایران رشد اقتصادی سریعی را شاهد بود؛ در این دوران، صنعت نفت ایران، ملی شد.
          </div>
        </div>

      </div>

      <br />
      <br />

      <div style={{backgroundColor:'grey', padding:'30px'}}>
        <Button style={dropDownButton} type="primary" onClick={this.showDetails}>
          <FontAwesomeIcon icon={faSortDown} size="lg" style={sortDownIcon}/>
          <span style={dropDownButtonText}>جزئیات نامه</span> 
        </Button>
      </div>
      <br />
      <div id='toggler' style={this.state.togglerWindow}>
        <div style={cardDiv}>
          <div style={cardHeader}>
            <div style={cardHeaderFlex}> 
              <div>1399/05/23</div>
              <div>در سدهٔ نوزدهم م، رویارویی با استعمار اروپای مدرن</div>
            </div>
            <div style={cardHeaderRegNo}>654132135432</div> 
          </div>
          
          <div style={cardBody}>
            <div style={inputBox}>
              <Input style={inputSelf} />
              <div style={inputLabel}>
                شماره ثبت
              </div>
            </div>
            <br/>
            <div style={inputBox}>
              <Input style={inputSelf} />
              <div style={inputLabel}>
                شماره ثبت
              </div>
            </div>
            <br/>
            <div style={inputBox}>
              <Input style={inputSelf} />
              <div style={inputLabel}>
                شماره ثبت
              </div>
            </div>
            <br/>
            <div style={inputBox}>
              <Input style={inputSelf} />
              <div style={inputLabel}>
                شماره ثبت
              </div>
            </div>
          </div>
        </div>
      </div>
      <span>asl;kdjf;lsakjdf;lkasjdfl;kjsadfl;kjsdf;lkjsaf;lkjasdfl;kjsadfl;kjasdf;lkj</span>
    </div>
  );
      }
}

export default App;
