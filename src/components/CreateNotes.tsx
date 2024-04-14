import { useRef } from "react";
import { Button, Form } from "react-bootstrap";

interface ICreateNotesProps {}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = (props) => {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <h2>Create Notes</h2>
      <Form className="mt-3 mb-3">
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" ref={titleRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Text</Form.Label>
          <Form.Control
            placeholder="Enter your notes"
            as="textarea"
            rows={3}
            ref={textRef}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
          <Form.Control
            type="color"
            id="colorInput"
            defaultValue="#adfadf"
            title="choose your color"
            ref={colorRef}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNotes;
