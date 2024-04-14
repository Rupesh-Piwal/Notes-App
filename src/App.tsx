import { useState } from "react";
import "./App.css";
import { Note } from "./models/note.model";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import { Col, Container, Row } from "react-bootstrap";

const App = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meetings",
      text: "code typescript for 5 hours",
      color: "adfadf",
      date: new Date().toString(),
    },
  ]);
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
