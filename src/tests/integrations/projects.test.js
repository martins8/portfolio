test("test projects page", async () => {
  const response = await fetch("http://localhost:3001/projects");
  expect(response.status).toBe(200);
});
