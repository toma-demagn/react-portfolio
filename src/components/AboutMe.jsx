import styled from "styled-components";
import {useSelector} from "react-redux";
import {selectData} from "../pages/homeSlice";
import {Element} from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
// Data
import {moreInfo} from "../data";
// Components
import {Col, Container, Row} from "react-bootstrap";
import {Title} from "./globalStyledComponents";
import cnesLogo from '../images/cnes_logo.png';



const StyledAboutMe = styled.section`
    p {
        font-size: 1.25rem;
    }

    .img {
        width: 18rem;
        height: 18rem;
    }
`;

export default function AboutMe() {
    const {avatar_url, bio} = useSelector(selectData);

    return (
        <Element name={"About"} id="about">
            <StyledAboutMe className="section">
                <Container>
                    <Container className="d-flex">
                        <Title>
                            <h2>About Me</h2>
                            <div className="underline"></div>
                        </Title>
                    </Container>
                    <Row className="align-items-center mt-5">
                        <Col className="d-flex flex-column text-center">
                            <Container>
                                <p>{bio}</p>
                                {moreInfo && <p>{moreInfo}</p>}
                            </Container>
                        </Col>
                        <Col className="d-none d-md-block text-center">
                            <img
                                src={avatar_url}
                                alt="GitHub Avatar"
                                loading="lazy"
                                className="mx-auto rounded-circle"
                                style={{width: "15rem", height: "15rem"}}
                            />
                        </Col>
                    </Row>
                    <Container className="mt-xxl-5 text-center">
                        <h3>Current position: Space surveillance at <img src={cnesLogo} alt="CNES Logo" style={{height: '1.3em'}}/></h3>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt}/> Toulouse, France</p>
                    </Container>
                </Container>
            </StyledAboutMe>
        </Element>
    );
}
