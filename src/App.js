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
    this.togglerWindowHeight = this.togglerWindow.offsetHeight;
    this.setState({togglerWindow:{
      transition: 'height 1s ease-out',
      overflowY:'hidden',
      height:`${this.togglerWindowHeight+2}px`
    }})
  }  
  showDetails = () =>{
    if(this.state.togglerWindowIsVisible){
      this.setState({togglerWindow:{
        transition: 'height 1s ease-out',
        overflowY:'hidden',
        height:'0'}
      })
        
    }
    else{
      this.setState({togglerWindow:{
        transition: 'height 1s ease-out',
        overflowY:'hidden',
        height: `${this.togglerWindowHeight+2}px`
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

      <div style={{backgroundColor:'grey', padding:'30px', marginBottom:'5px'}}>
        <Button style={dropDownButton} type="primary" onClick={this.showDetails}>
          <FontAwesomeIcon icon={faSortDown} size="lg" style={sortDownIcon}/>
          <span style={dropDownButtonText}>جزئیات نامه</span> 
        </Button>
      </div>
      <div id='toggler' style={this.state.togglerWindow} ref={(inputEl)=>{this.togglerWindow=inputEl}}>
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
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quod veritatis reprehenderit atque assumenda mollitia ab eos laboriosam! Voluptates eum dignissimos voluptatum est error, repellat beatae praesentium quaerat, ad velit soluta tempore neque ab tenetur adipisci placeat veritatis pariatur similique fuga quasi eos? Laudantium laborum optio explicabo fugiat esse odio provident, beatae voluptates ullam adipisci eveniet id eos vel et, quas dolore nostrum molestiae minima a. Quia accusamus dolores eos nemo distinctio soluta corrupti necessitatibus architecto illum quibusdam mollitia ipsum iusto quos facilis corporis ipsa unde, vel dignissimos veritatis. Suscipit perferendis at deleniti unde. Nemo laudantium unde nobis illo perspiciatis incidunt voluptatibus. Rem accusantium tempora, labore sunt cum enim facilis ad. Enim quam voluptas ut neque modi tenetur nihil fugiat quibusdam iste, debitis esse. Sed suscipit saepe impedit maxime molestiae nisi ad harum natus hic tempora animi earum aut nobis sapiente praesentium voluptatem aliquid modi, dolorum, magnam ea. Error, deserunt! Porro rem dignissimos, ipsa sint magni quis! Modi nemo eligendi aut id ab facilis odit neque commodi suscipit consequatur culpa incidunt quae vitae reiciendis, nesciunt veniam in obcaecati ut eveniet voluptate earum. Ipsum voluptate deserunt, vero quam optio cumque quas rerum in eos rem quisquam dolorum at quo repudiandae. Facere cupiditate assumenda consectetur odit, quisquam molestiae vel rerum quasi unde, sunt reprehenderit enim illum libero, distinctio explicabo fugiat asperiores tempore ipsum quam laudantium maxime soluta aliquam accusamus incidunt! Id atque illo quod autem veritatis repudiandae numquam possimus adipisci sequi ratione laborum, cum dolor non esse fugit omnis commodi! Cum eligendi commodi doloremque mollitia sed ducimus voluptatum id illo vero ipsum quo, dolor eum dicta eveniet est itaque animi molestias voluptate rerum non doloribus optio. Error neque voluptates impedit fuga tenetur. Quod quas praesentium numquam voluptatum ipsum, accusamus quasi voluptatem? Praesentium, nam officia fugiat, molestias autem, exercitationem illo dolor recusandae consequatur adipisci necessitatibus? Eveniet, ipsa earum ut facilis ab praesentium perspiciatis? Expedita veniam ducimus accusantium sed rerum omnis repellendus provident, natus tempore aliquid magnam at id unde quam quasi animi laudantium repudiandae vitae illo ex cumque alias. Exercitationem doloremque voluptas excepturi quod saepe eum laborum, omnis corporis facere nemo odio labore, in porro sint numquam officiis! Veritatis quo deserunt sint at dolorum corporis impedit vel magni. Corrupti, nihil illum optio commodi quidem est nesciunt quasi numquam molestias, facere, repudiandae dicta qui quis libero. Similique perferendis enim quod corrupti magnam magni sint, dicta unde commodi ullam neque voluptatibus quisquam soluta rerum tempore molestias ratione perspiciatis, vitae suscipit aliquid iusto illo! Vero facere ipsum id nam, iste eveniet similique, rerum molestias dolor cum optio labore sit. Eius at, rerum consequatur iste quam corrupti? Ut assumenda voluptatibus recusandae! Nam ut quas incidunt eaque nostrum sit, dolore culpa dolorum quia vitae laborum doloremque consectetur corrupti odit atque repellat quisquam at quaerat tempora, accusantium recusandae error maiores ipsam. In ipsam soluta harum dolor atque inventore optio aut, est voluptatem dignissimos, tempora minus velit similique. Ea excepturi molestiae, quod odit, suscipit tenetur sint minima tempora ipsum mollitia explicabo corporis reprehenderit unde. Sed ipsum iste non dolorum quibusdam aspernatur culpa odit recusandae officiis, aliquid quod sit necessitatibus at quidem tempore sequi expedita eaque animi! Dolores quis est neque eveniet consectetur nisi ut minima dicta in facilis, perferendis quos sed dolor exercitationem et magni vel quod nihil assumenda culpa. Exercitationem velit, consectetur doloremque quis facere unde voluptates ratione accusantium quibusdam dignissimos nesciunt expedita odio odit quia aspernatur vero commodi! Natus id modi omnis accusamus molestias eos ea voluptatum quia porro, ipsam commodi, itaque eaque consequatur maiores dicta culpa aspernatur minus consectetur! A aut eius rerum porro reprehenderit consequatur saepe molestias quasi veniam ullam iste eveniet libero, incidunt consequuntur hic sint. Debitis ipsa error assumenda laudantium esse eligendi, quisquam vitae unde mollitia voluptatum excepturi eaque vel similique blanditiis iure natus. Neque consequatur ipsam recusandae impedit explicabo, quos quaerat incidunt accusantium, suscipit aut laboriosam mollitia iure voluptatibus asperiores nihil blanditiis libero aspernatur consequuntur magni repellendus unde perspiciatis quia. Ex fugiat eveniet voluptatibus alias, possimus officiis earum aspernatur minima rem incidunt. Doloremque sint itaque dignissimos? Illo est quaerat quibusdam iste voluptate commodi labore odit. Similique, doloremque facilis. Expedita ab, sequi distinctio error qui in, itaque exercitationem laborum consequatur, non quis. Praesentium, labore consectetur facilis sapiente magnam deleniti, eveniet animi a quidem non quaerat vitae veniam ut tenetur repudiandae placeat? Reprehenderit eveniet dicta dolorem natus! Natus amet adipisci, repellat quidem aspernatur numquam quas voluptate rerum, quia alias temporibus ea praesentium magni, consequatur inventore molestias laboriosam consectetur aliquid culpa dolorum similique. Impedit tempora quas voluptate totam ut odio rerum corrupti corporis nihil porro suscipit possimus quo nisi saepe sint amet blanditiis, molestias praesentium laborum! Quod perferendis sunt eius tenetur. Aperiam esse nisi necessitatibus cum repudiandae ducimus molestias, totam consequuntur nam voluptas unde qui veritatis, laudantium officia tempora quibusdam, dolorum nemo. Nobis natus, optio pariatur maiores suscipit iusto odio aliquid dicta autem error, sed, officiis sequi aliquam aperiam laboriosam cupiditate sint ratione distinctio commodi quibusdam repudiandae rerum? Nostrum debitis officiis odit laudantium laboriosam, alias quisquam tempora expedita autem libero nesciunt quos reiciendis fugiat maiores omnis aperiam itaque provident consectetur, fuga nulla! Dolore perspiciatis adipisci minus, doloribus cumque architecto quibusdam ipsum repellat id perferendis veniam nihil! Quae eligendi nemo mollitia culpa eos voluptatibus velit consectetur inventore iure fuga excepturi molestias expedita repellendus, porro quis iusto animi sapiente hic eveniet dolor laboriosam quaerat. Unde corrupti eos repellat illo in, nostrum nam modi ut enim facere. Quidem, dolore nisi. Neque modi quas ducimus laborum vero repellendus earum in aut, ut fugiat, repellat accusamus natus provident itaque mollitia libero cupiditate dolores ratione sequi asperiores dolor quaerat tenetur deserunt? Nesciunt deleniti eveniet numquam blanditiis adipisci temporibus, rem fugiat placeat enim consequuntur soluta voluptatibus. Eaque, nostrum culpa. Est, recusandae doloremque. In quaerat cupiditate quam exercitationem, deserunt soluta! Rem modi hic dolore unde. Omnis, vitae itaque ipsam distinctio autem est hic ipsum, aliquam impedit ipsa quis labore? Provident veritatis odit nihil officia nam eligendi ipsum nesciunt doloremque explicabo consectetur maxime, deleniti quo molestiae fugiat voluptatibus facilis minus enim obcaecati atque soluta rem. Sunt at delectus blanditiis culpa maxime sed ea molestiae debitis.s</span>
    </div>
  );
      }
}

export default App;
