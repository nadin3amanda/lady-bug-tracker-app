import { Bug } from "./Bug";
import styled  from "styled-components";

const BugListTable = (props: {bugs: Bug[], onDeleteBug: Function }) => {
    const {bugs, onDeleteBug} = props;

    const resolvedPressed = (id: string) => {
        onDeleteBug(id);
    };

    return <table>
        <thead>
            <tr>
            <th><Header>Description</Header></th>
                <th><Header>Priority</Header></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {bugs.length === 0 && <tr><td>No bugs found in here!</td> </tr> }
            {bugs.length > 0 && bugs.map(bug => <tr key={bug.id}>
                <td>{bug.description}</td>
                <td>{bug.priority}</td>
                <td><ResolvedButton onClick={() => resolvedPressed(bug.id)}>Resolved</ResolvedButton></td>
            </tr>)}
        </tbody>
    </table>

};

export default BugListTable;

const Header = styled.p`
    margin: 5px auto;
    text-align: center;
    font-size: 15px;
`

const ResolvedButton = styled.button`
    background-color: cadetblue;
    border: none;
    border-radius: 8px;
    padding: 10px;
    color: white;
    text-transform:uppercase;
    display: block;
    margin: 6px auto;
    cursor: pointer;
`