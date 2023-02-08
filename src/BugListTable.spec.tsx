import { render, fireEvent, screen } from "@testing-library/react";
import { BugPriority } from "./Bug";
import BugListTable from "./BugListTable";

test('the bug table should display a list of bugs', () => {
    const bugList: Bug[] = [
        {id: '1234', description:'test bug one', priority: BugPriority.LOW },
        {id: '5678', description:'test bug two', priority: BugPriority.MEDIUM },
        {id: '9000', description:'test bug three', priority: BugPriority.HIGH }
    ];

    render(<BugListTable bugs={bugList} onDeleteBug={() => {}} />)
    const rows = screen.getAllByRole('row');
    for (let index = 1; index < rows.length; index += 1) {
        expect(rows[index]).toHaveTextContent(bugList[index -1].description);
    }
});