import { Button, Text, Wrapper } from "./Home.styled";

export default function Home() {
  return (
    <Wrapper>
      <h1>New Car Rental in Ukraine with Address Delivery within an Hour</h1>
      <Text>
        Car rental is the best way to move around million-strong cities
        regardless of the time of year. RENTAL company provides car rental
        services in all major cities of Ukraine. Our branches are located in
        Kyiv, Kharkiv, Dnipro, Lviv, Odesa, Vinnytsia, Zaporizhzhia, and
        Ivano-Frankivsk. RENTAL services are a wide range of cars for rent, from
        economy cars such as Chevrolet Spark to premium sedans like Mercedes S
        Class and SUVs like Audi Q7 and Toyota Land Cruiser 200. When you rent a
        car on our website, you choose the specific model, not the class of the
        car.
      </Text>
      <Button to={"/catalog"}>Rental Cars</Button>
    </Wrapper>
  );
}
