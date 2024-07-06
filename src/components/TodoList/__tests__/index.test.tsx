import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import '../../../matchMedia';
import TodoList from "../index";

describe("TodoList main functionality", () => {
  beforeEach(() => {
    render(<TodoList />);
  })

  it("should render correctly", () => {
    expect(screen.getByText("TODO List")).toBeInTheDocument();
    expect(screen.getByText("3 items left")).toBeInTheDocument();
  });

  it("should check the checkbox after clicking on the task", () => {
    const checkbox = screen.getByLabelText("Write beautiful code");

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  })

  it("should add new todo after pushing enter", () => {
    const input = screen.getByPlaceholderText("Add TODO");

    fireEvent.change(input, { target: { value: "New TODO" } });
    fireEvent.keyDown(input, { key: "Enter", keyCode: 13 });

    expect(screen.getByText("4 items left")).toBeInTheDocument();
  })

  it("should show an error if input value is empty", () => {
    const input = screen.getByPlaceholderText("Add TODO");

    fireEvent.keyDown(input, { key: "Enter", keyCode: 13 });

    expect(screen.getByText('Please input your todo')).toBeInTheDocument();
  })

  it("should show an error if the title is duplicated", () => {
    const input = screen.getByPlaceholderText("Add TODO");

    fireEvent.change(input, { target: { value: "Do tests" } });
    fireEvent.keyDown(input, { key: "Enter", keyCode: 13 });

    expect(screen.getByText('The task has been already added')).toBeInTheDocument();
  })

  it("should filter the tasks correctly", () => {
    const allBtn = screen.getByText("All");
    const completedBtn = screen.getByText("Completed");
    const activeBtn = screen.getByText("Active");

    fireEvent.click(completedBtn);

    expect(screen.getByText("1 items left")).toBeInTheDocument();

    fireEvent.click(activeBtn);

    expect(screen.getByText("2 items left")).toBeInTheDocument();

    fireEvent.click(allBtn);

    expect(screen.getByText("3 items left")).toBeInTheDocument();
  })

  it("should remove all completed tasks after clicking 'Clear completed'", () => {
    expect(screen.getByText("3 items left")).toBeInTheDocument();

    const actionBtn = screen.getByText("Clear completed");

    fireEvent.click(actionBtn);

    expect(screen.getByText("2 items left")).toBeInTheDocument();

    const btn = screen.getByText("Completed");

    fireEvent.click(btn);

    expect(screen.getByText("0 items left")).toBeInTheDocument();
  })
})
