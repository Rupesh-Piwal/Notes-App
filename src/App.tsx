import { useState } from "react";
import "./App.css";
import { Note } from "./models/note.model";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import { Col, Container, Row } from "react-bootstrap";
import CreateNotes from "./components/CreateNotes";

const App = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meetings",
      text: "code typescript for 5 hours",
      color: "#adfadf",
      date: new Date().toString(),
    },
  ]);
  return (
    <div className="main">
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
