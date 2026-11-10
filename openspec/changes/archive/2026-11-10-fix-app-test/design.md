# Design
Render `<App />` and assert the home typing text container / menu links are present. Menu link labels are stable, so assert on "My Stack". No mocks unless `matchMedia` is missing in jsdom (then stub it in the test).
