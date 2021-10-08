import React from 'react'
import axios from 'axios'
import swal from 'sweetalert'

class Trivia extends React.Component{
    constructor(){
        super()
        this.state = {
            questions : [],
            userAnswer: ''
        }
    }

    componentDidMount(){
        axios.get('https://jservice.io/api/random')
            .then((response)=>{
                // console.log(response.data)
                const questions = response.data
                this.setState({questions})

            })

            .catch((err)=>{
                console.log(err)
            })
    }

    handleChange = (e)=>{
        // console.log(e)
        const userAnswer = e.target.value
        this.setState({userAnswer})
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const formData = {
            userAnswer: this.state.userAnswer
        }
        this.setState({userAnswer: ''})
        // console.log('formData', formData)
        if(formData.userAnswer.toLowerCase() === localStorage.getItem('answer').toLowerCase()){
            // alert('Answer is correct')
            // alert('next question')
            swal("Answer is correct!", "Ready for next question ?", "success")
            axios.get('https://jservice.io/api/random')
            .then((response)=>{
                // console.log(response.data)
                const questions = response.data
                this.setState({questions})

            })
            .catch((err)=>{
                // console.log(err)
                swal(err)
            })
        }else{
            swal("Answer is incorrect", "Try again!", "error")
        }
        
    }

 

    render(){
        return(
            <div className = "container">
                <h3 style = {{fontFamily: 'sans-serif'}}>Let's start!</h3>
                {/* <p>Total Number of questions - {this.state.questions.length}</p> */}
               
                <div className = "mb-3">Answer the below question
                  <br/><br/>{this.state.questions.map((ques)=>{
                        return(
                            <div  key = {ques.id} style = {{borderStyle: 'outset', borderWidth: '7px', borderColor: 'lightBlue', margin: '20px', color: 'aqua'}}>
                                {localStorage.setItem('answer', ques.answer)}
                                <p style = {{margin: '20px', color: 'blueviolet'}} className = "text-center">{ques.question}</p>
                            </div>
                        )
                    })}</div>

                <form onSubmit = {this.handleSubmit}>
                    <div className = "form-outline mb-3">
                        <input
                            type = "text"
                            placeholder = "Enter your answer"
                            className="form-control"
                            id="form2Example1"
                            value = {this.state.userAnswer}
                            onChange = {this.handleChange}
                        />
                    </div>
                    <input type = "submit" className = "btn btn-primary" />
                    {/* <p>Answer users - {this.state.userAnswer}</p> */}
                </form>
                
                
                
            </div>
        )
    }
}

export default Trivia



// handleSubmit(ans){
//     return e => {
//         e.preventDefault()
//         // console.log(ans)
//         const formData = {
//             userAnswer: this.state.userAnswer
//         }
//         console.log('formData', formData)
//         if(formData.userAnswer === localStorage.getItem('answer')){
//             console.log('Successfully answered.. well done')
//             alert('Answer is correct')
//         }else{
//             console.log('wrong answer - Try again, you can do it')
//             alert('Answer is incorrect')
//         }
        
//     }
// }

// {this.state.questions.map((ques)=>{
//     return(
//         <form onSubmit = {this.handleSubmit(ques.answer)} key = {ques.id}>
//             {localStorage.setItem('answer', ques.answer)}
//             <input 
//                 type = "text"
//                 placeholder = "Enter your answer"
//                 value = {this.state.userAnswer}
//                 onChange = {this.handleChange}
//             />
//             <p>Answer users - {this.state.userAnswer}</p>
//             {/* {console.log(this.state.userAnswer)} */}
//             <input type = "submit"/>
//         </form>
//     )
// })}