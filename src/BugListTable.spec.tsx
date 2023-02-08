import { render, fireEvent, screen } from "@testing-library/react";
import { Bug, BugPriority } from "./Bug";
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

test('resolved button should remove bug', () => {
    let bugList: Bug[] = [
        {id: '1234', description:'test bug one', priority: BugPriority.LOW },
        {id: '5678', description:'test bug two', priority: BugPriority.MEDIUM },
        {id: '9000', description:'test bug three', priority: BugPriority.HIGH }
    ];

    const removeBug = (id: string) => {
        bugList = bugList.filter(bug => bug.id !== id);
    }

    const { rerender } = render(<BugListTable bugs={bugList} onDeleteBug={(id: string) => {removeBug(id)}} />)

    fireEvent.click(screen.getAllByText('Resolved')[0]);
    rerender(<BugListTable bugs={bugList} onDeleteBug={(id: string) => {removeBug(id)}} />)
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(3);

});