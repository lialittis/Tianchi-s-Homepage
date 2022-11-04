import React from "react";
import styles from "./jumbotron.module.scss";
import styled from "styled-components"

const Button = styled.button`
  font-size : 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

class Jumbotron extends React.Component {
    render() {
      return (
        <div className={styles.jumbotron}>
          {/* <h1>{this.props.mainText}</h1>
          <p>{this.props.subText}</p>
          <PrimaryButton buttonText='Learn more'/> */}

          <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-6">
            <img src={require("../../assets/images/brief.jpg")} />
          </div>
          <div class="col-sm-4">
            <div>
              <h2 class="jumbotron-heading">Tianchi 于天池</h2>
              <p class="lead text-muted">CS Ph.D. student @ Sorbonne Universite</p>
              
              <a href="files/cv.pdf" target="_blank"><Button>CV</Button></a>
              <a href="https\://https://tianchis-studing-lake.gitbook.io/" target="_blank">
                <Button>Blog</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
        </div>
      )
    }
}

class PrimaryButton extends React.Component {
render() {
    return (
        <div>
            <p><a className="btn btn-primary btn-lg" href="#" role="button">{this.props.buttonText}</a></p>
            </div>
        )
    }
}


export default Jumbotron;