import React, { Component } from 'react'

//cách 1: import đường dẫn css từ file component
// import './styles.css'

//cách 2: import css tại component
import style from './styles.module.css'
export default class Styles extends Component {
    render() {
        return (
            <div className="container">
                <p className={style.textGreen}>1fse23</p>
                <p className={style['bgBlack']}>sf</p>
                <p className={`${style.textGreen} ${style['bgBlack']} display-4`}>ahhihi</p>
                <section style={{
                    backgroundColor:'black',
                    color:'green'
                }}>compooo</section>
            </div>
            
        )
    }
}
