describe("GET /posts", () => {
  it("Call GET to get a list of all posts", () => {
    cy.request("GET", "https://6630fa00c92f351c03dbc81e.mockapi.io/bd/posts").then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).length.to.be.greaterThan(1)
    
    })
  })

  it("Call GET to get post with id 1 ", () => {
    cy.request("GET", "https://6630fa00c92f351c03dbc81e.mockapi.io/bd/posts/1").then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.createdAt).to.eq("2025-11-20T14:49:50.209Z")
      expect(response.body.title).to.eq("Sokoke")
      expect(response.body.content).to.eq("Vulpes ascit brevis vulgivagus audio soluta vulnus attonbitus. Averto tremo assentator voco sub velut. Arbustum soluta tergeo tres ara coniuratio apostolus veniam.")
      expect(response.body.id).to.eq("1")
    
    })
  })

   it("verify that there are 4 key value pairs in each object", () => {
  cy.request("GET", "https://6630fa00c92f351c03dbc81e.mockapi.io/bd/posts").then((response) => {
   
    expect(response.status).to.eq(200)
    response.body.forEach((item: any) => {
      expect(Object.keys(item)).to.have.length(4)
      expect(item).to.have.keys(["createdAt", "title", "content", "id"]);
    })

  })
})

it("Call GET to get post with non-existent id", () => {
  cy.request({
    method: "GET",
    url: "https://6630fa00c92f351c03dbc81e.mockapi.io/bd/posts/100",
    failOnStatusCode: false, 
  }).then((response) => {
    expect(response.status).to.eq(404)
  })
})


})