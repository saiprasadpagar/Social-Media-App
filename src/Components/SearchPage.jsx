import styled from "styled-components";

const SearchPage = () => {
  return (
    <Container>
      <Card>
        <img src="" alt="profilepic" />
        <div className="info">
          <p>
            <a href="#">ramelaine20</a>
          </p>
          <p>Ramelaine</p>
        </div>
      </Card>
      <Card>
        <img src="" alt="profilepic" />
      </Card>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  width: max-content;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  margin: 10px;
  font-size: 13px;
  border: 1px solid hsl(147, 7%, 75%);
  border-radius: 5px;
  width: max-content;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

export default SearchPage;
