 const newUser = {
    "id": "111116",
    "username": "Anna",
    "firstName": "Ivanovna",
    "lastName": "Ivanova",
    "email": "em@ail.com",
    "password": "3333",
    "phone": "89033333333",
    "userStatus": "1"
  };
  const updUser = {
    "id": "111116",
    "username": "Anyta",
    "firstName": "Ivanovna",
    "lastName": "Ivanova",
    "email": "em@ail.com",
    "password": "3333",
    "phone": "89033333333",
    "userStatus": "1",
  };


describe('User test', () => {
 //создание пользователя
  it('add new user', () => {
    cy.request({
      url: 'https://petstore.swagger.io/v2/user',
      method: 'POST',
      body: newUser
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.eql(newUser.id)
    });
  });
  
  //пользователь создан
  it('get user username', () => {
    cy.request({
      url: "https://petstore.swagger.io/v2/user/Anna",
      method: "GET",
       }).then((response) => {
      expect(response.status).to.equal(200);
      });
  })

//изменение данных пользователя
  it('Updatet user', () => {

    cy.request({
      url: "https://petstore.swagger.io/v2/user/login?username=Anna&password=3333",
      method: "GET",
    }).then((response) => {
      expect(response.status).to.equal(200);
      cy.request({
        url: "https://petstore.swagger.io/v2/user/Anna",
        method: "PUT",
        body: updUser,
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
      cy.request({
        url: "https://petstore.swagger.io/v2/user/Anyta",
        method: "GET",
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
  });

//удаление пользователя
  it('Delete user', () => {

    cy.request({
      url: "https://petstore.swagger.io/v2/user/Anyta",
      method: "DELETE",
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
    cy.request({
      url: "https://petstore.swagger.io/v2/user/Anyta",
      method: "GET",
      failOnStatusCode: false,
    })
      .its("status")
      .should("be.eq", 404);
  });

});

