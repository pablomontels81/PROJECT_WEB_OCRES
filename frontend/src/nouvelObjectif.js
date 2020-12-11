import React from 'react';
import './nouvelObjectif.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
class NouvelObjectif extends React.Component {

    constructor(props) {
        super(props);

        this.onChangeVelo_goal = this.onChangeVelo_goal.bind(this);
        this.onChangeNatation_goal = this.onChangeNatation_goal.bind(this);
        this.onChangeCourse_goal = this.onChangeCourse_goal.bind(this);
        this.onSubmitVelo_goal = this.onSubmitVelo_goal.bind(this);
        this.onSubmitNatation_goal = this.onSubmitNatation_goal.bind(this);
        this.onSubmitCourse_goal = this.onSubmitCourse_goal.bind(this);

        this.state = {
            velo_goal: '',
            natation_goal: '',
            course_goal: '',
        }
    }

    /*
    componentDidMount() {
        this.setState({
            
        })
    }
    */

    onChangeVelo_goal(e) {
        this.setState({
            velo_goal: e.target.value
        });
    }

    onChangeNatation_goal(e) {
        this.setState({
            natation_goal: e.target.value
        });
    }

    onChangeCourse_goal(e) {
        this.setState({
            course_goal: e.target.value
        });
    }

    onSubmitVelo_goal(e) {
        e.preventDefault();

        const veloObjectif = {
            velo_goal: this.state.velo_goal,
        }

        console.log(veloObjectif);

        window.location = "/formulaire";
    }

    onSubmitNatation_goal(e) {
        e.preventDefault();

        const natationObjectif = {
            natation_goal: this.state.natation_goal,
        }

        console.log(natationObjectif);

        window.location = "/formulaire";
    }

    onSubmitCourse_goal(e) {
        e.preventDefault();

        const courseObjectif = {
            course_goal: this.state.course_goal,
        }

        console.log(courseObjectif);

        window.location = "/formulaire";
    }

    render(){
        return (
            <div className="espace">
                <h3>Entrez un nouvel objectif</h3>
                <Container fluid >
                    <Row>
                        <Col lg={1}></Col>
                        <Col lg={10}>
                            <div className="formulaire">
                                <p className="titre">Course</p>
                                <form onSubmit={this.onSubmitCourse_goal}>
                                <div className="cont1">
                                    <div className="cont2">
                                        <p>Distance à réaliser:<input type="text" className="input" name="distance" className="entree" value={this.state.course_goal} onChange={this.onChangeCourse_goal}/></p>
                                    </div>
                                    <div className="cont2">
                                        <p><input type="submit" name="objectifCourse" value="Modifer" className="button"/></p>
                                    </div>  
                                </div> 
                                </form>
                                <p className="titre">Vélo</p>
                                <form onSubmit={this.onSubmitVelo_goal}>
                                <div className="cont1">
                                    <div className="cont2">
                                        <p>Distance à réaliser:<input type="text" className="input" name="distance" className="entree" value={this.state.velo_goal} onChange={this.onChangeVelo_goal}/></p>
                                    </div>
                                    <div className="cont2">
                                        <p><input type="submit" name="objectifVelo" value="Modifier" className="button"/></p>
                                    </div>  
                                </div>
                                </form>
                                <p className="titre">Natation</p>
                                <form onSubmit={this.onSubmitNatation_goal}>   
                                <div className="cont1">
                                    <div className="cont2">
                                        <p>Distance à réaliser:<input type="text" className="input" name="distance" className="entree" value={this.state.Natation_goal} onChange={this.onChangeNatation_goal}/></p>
                                    </div>
                                    <div className="cont2">
                                        <p><input type="submit" name="objectifNatation" value="Modifier" className="button"/></p>
                                    </div>                         
                                </div>
                                </form>
                            </div>
                        </Col>
                        <Col lg={1}></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default NouvelObjectif;