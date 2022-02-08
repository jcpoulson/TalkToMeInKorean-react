import React from "react"
import Link from 'next/link';
import { Collapse, Layout, Row, Col } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import { AppContext } from '../../AppContext';

const { Panel } = Collapse;


/* START COMPONENT */

class LevelCollapse extends React.Component {
  static contextType = AppContext;

  state = {
    expandIconPosition: 'right',
    levelData: [{}]
  };

  componentDidMount = async () => {
    const levelData = await this.context.getLevels();
    this.setState({...this.state, levelData: levelData})
  }

  panelStyle = { margin: "5%"}

  render() {
    const { expandIconPosition } = this.state;
    const lessonBoxStyle = { borderBottom: "solid 2px grey", padding: "2.5%" }
    const checkCirleStyle = { marginTop: ".5%", marginRight: "2.5%" }

    return (
      <Layout>
          <Row justify="center">
            <Col xs={{span: "24"} }xl={{span: "15"}}>
                <Collapse expandIconPosition={expandIconPosition}>
                    {
                      this.state.levelData.map((level, index )=> {
                        const currentLevel = Object.entries(level).sort();
                        return (
                          <Panel style={this.panelStyle} header={`Level ${index + 1}`} key={index + 1}>
                              {
                                currentLevel.map((lesson, counter) => (
                                  <div className="lesson-box" style={lessonBoxStyle}>
                                    <CheckCircleFilled style={checkCirleStyle}/>
                                    <Link href={`/curriculum/${index + 1}/${counter + 1}`}><h1 className="learning-center-link">Lesson {counter + 1}: {lesson[1].title}</h1></Link>
                                  </div>
                                ))
                              }
                          </Panel>
                        )
                      })
                    }
                </Collapse>
            </Col>
          </Row>
      </Layout>
    );
  }
}

export default LevelCollapse;