# Plan: Add a new "Goals" page

## Why this page
The app currently has demo pages (Home, Counter, Weather). A "Goals" page adds practical value and shows common Blazor patterns:
- form input and validation
- list rendering
- local state updates
- component styling

## Proposed user experience
- New page title: **Goals**
- Route: `/goals`
- Users can:
  - add a goal (title + optional target date)
  - mark a goal as completed
  - remove a goal
- Visual states:
  - active goals
  - completed goals (faded + strike-through)

## Implementation steps
1. Create the page component
- Add `Pages/Goals.razor`.
- Add `@page "/goals"` and page layout markup.
- Include a simple input form and goal list UI.

2. Add page model/state
- In `Goals.razor`, define a local `List<GoalItem>`.
- Add handlers:
  - `AddGoal()`
  - `ToggleGoal(Guid id)`
  - `DeleteGoal(Guid id)`
- Use a small internal model:
  - `Guid Id`
  - `string Title`
  - `DateTime? TargetDate`
  - `bool IsCompleted`

3. Add lightweight validation
- Prevent adding empty titles.
- Trim user input.
- Show an inline validation message for invalid submit.

4. Add styles
- Create `Pages/Goals.razor.css` for page-specific styles.
- Style form, list items, and completed state.
- Keep spacing and typography consistent with current app look.

5. Add navigation entry
- Update `Layout/NavMenu.razor`.
- Add a menu link to `/goals` with a relevant icon class.

6. Verify routing and behavior
- Run the app and verify:
  - Goals page loads from the nav menu.
  - Add/toggle/delete work without reload.
  - Validation appears for empty input.

## Acceptance criteria
- "Goals" appears in the left nav and opens `/goals`.
- User can add, complete/uncomplete, and delete goals.
- Empty goal submissions are blocked with a visible message.
- Styles are scoped and do not break existing pages.
- Existing pages (Home/Counter/Weather) continue to work.

## Optional next iteration
- Persist goals in browser local storage.
- Add filters (All / Active / Completed).
- Add edit-in-place for goal title.
- Add due-date highlighting (overdue soon/overdue).

## Suggested commit breakdown
1. `feat(goals): add goals page with local state and actions`
2. `feat(nav): add goals link to navigation`
3. `style(goals): add scoped styles and completed state visuals`
4. `docs: add plan for goals page`
