import {
  Box,
  HStack,
  Heading,
  Text,
  VStack,
  Image,
  Button,
  Divider,
  ListItem,
  OrderedList,
  ListIcon,
  List,
} from "@chakra-ui/react";
import {
  AiFillStar,
  AiFillCaretRight,
  AiOutlineStar,
  AiOutlineSave,
  AiFillHeart,
  AiOutlineComment,
} from "react-icons/ai";
import { LuVegan, LuWheat } from "react-icons/lu";
import { GiCow } from "react-icons/gi";
import { useState } from "react";

const RecipeCard = () => {
  const [useMetric, setUseMetric] = useState(true);
  const createMarkup = (html: any) => ({ __html: html });
  const recipe = {
    vegetarian: true,
    vegan: false,
    glutenFree: true,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 19,
    gaps: "no",
    preparationMinutes: -1,
    cookingMinutes: -1,
    aggregateLikes: 8,
    healthScore: 0,
    creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    license: "CC BY 3.0",
    sourceName: "Foodista",
    pricePerServing: 65.01,
    extendedIngredients: [
      {
        id: 1001,
        aisle: "Milk, Eggs, Other Dairy",
        image: "butter-sliced.jpg",
        consistency: "SOLID",
        name: "butter",
        nameClean: "butter",
        original: "6 ounces Butter, softened",
        originalName: "Butter, softened",
        amount: 6.0,
        unit: "ounces",
        meta: ["softened"],
        measures: {
          us: {
            amount: 6.0,
            unitShort: "oz",
            unitLong: "ounces",
          },
          metric: {
            amount: 170.097,
            unitShort: "g",
            unitLong: "grams",
          },
        },
      },
      {
        id: 19336,
        aisle: "Baking",
        image: "powdered-sugar.jpg",
        consistency: "SOLID",
        name: "powdered sugar",
        nameClean: "powdered sugar",
        original: "1/4 cup Powdered Sugar, sifted",
        originalName: "Powdered Sugar, sifted",
        amount: 0.25,
        unit: "cup",
        meta: ["sifted"],
        measures: {
          us: {
            amount: 0.25,
            unitShort: "cups",
            unitLong: "cups",
          },
          metric: {
            amount: 30.0,
            unitShort: "g",
            unitLong: "grams",
          },
        },
      },
      {
        id: 93813,
        aisle: "Gourmet",
        image: "molasses.jpg",
        consistency: "SOLID",
        name: "vanilla bean paste",
        nameClean: "vanilla paste",
        original: "2 teaspoons Vanilla Bean Paste (or 1 tsp Vanilla Extract)",
        originalName: "Vanilla Bean Paste (or 1 tsp Vanilla Extract)",
        amount: 2.0,
        unit: "teaspoons",
        meta: ["(or 1 tsp Vanilla Extract)"],
        measures: {
          us: {
            amount: 2.0,
            unitShort: "tsps",
            unitLong: "teaspoons",
          },
          metric: {
            amount: 2.0,
            unitShort: "tsps",
            unitLong: "teaspoons",
          },
        },
      },
      {
        id: 20081,
        aisle: "Baking",
        image: "flour.png",
        consistency: "SOLID",
        name: "ap flour",
        nameClean: "wheat flour",
        original: "1 cup AP Flour, sifted",
        originalName: "AP Flour, sifted",
        amount: 1.0,
        unit: "cup",
        meta: ["sifted"],
        measures: {
          us: {
            amount: 1.0,
            unitShort: "cup",
            unitLong: "cup",
          },
          metric: {
            amount: 125.0,
            unitShort: "g",
            unitLong: "grams",
          },
        },
      },
      {
        id: 20027,
        aisle: "Baking",
        image: "white-powder.jpg",
        consistency: "SOLID",
        name: "cornstarch",
        nameClean: "corn starch",
        original: "1/4 cup Cornstarch",
        originalName: "Cornstarch",
        amount: 0.25,
        unit: "cup",
        meta: [],
        measures: {
          us: {
            amount: 0.25,
            unitShort: "cups",
            unitLong: "cups",
          },
          metric: {
            amount: 32.0,
            unitShort: "g",
            unitLong: "grams",
          },
        },
      },
      {
        id: 1095,
        aisle: "Baking",
        image: "evaporated-milk.png",
        consistency: "SOLID",
        name: "condensed milk",
        nameClean: "sweetened condensed milk",
        original: "1 (14oz) can Sweetened Condensed Milk",
        originalName: "Sweetened Condensed Milk",
        amount: 14.0,
        unit: "oz",
        meta: ["sweetened", "canned"],
        measures: {
          us: {
            amount: 14.0,
            unitShort: "oz",
            unitLong: "ounces",
          },
          metric: {
            amount: 396.893,
            unitShort: "g",
            unitLong: "grams",
          },
        },
      },
      {
        id: 1001,
        aisle: "Milk, Eggs, Other Dairy",
        image: "butter-sliced.jpg",
        consistency: "SOLID",
        name: "butter",
        nameClean: "butter",
        original: "3 1/2 ounces Butter",
        originalName: "Butter",
        amount: 3.5,
        unit: "ounces",
        meta: [],
        measures: {
          us: {
            amount: 3.5,
            unitShort: "oz",
            unitLong: "ounces",
          },
          metric: {
            amount: 99.223,
            unitShort: "g",
            unitLong: "grams",
          },
        },
      },
      {
        id: 93829,
        aisle: "Baking",
        image: "corn-syrup.png",
        consistency: "SOLID",
        name: "golden syrup",
        nameClean: "golden syrup",
        original: "2 tablespoons Golden Syrup",
        originalName: "Golden Syrup",
        amount: 2.0,
        unit: "tablespoons",
        meta: [],
        measures: {
          us: {
            amount: 2.0,
            unitShort: "Tbsps",
            unitLong: "Tbsps",
          },
          metric: {
            amount: 2.0,
            unitShort: "Tbsps",
            unitLong: "Tbsps",
          },
        },
      },
    ],
    id: 664288,
    title: "Vanilla Bean Melting Moment Cookies With Caramel Filling",
    readyInMinutes: 244,
    servings: 10,
    sourceUrl:
      "https://www.foodista.com/recipe/3RS64MR2/vanilla-bean-melting-moment-cookies-with-caramel-filling",
    image: "https://spoonacular.com/recipeImages/664288-556x370.jpg",
    imageType: "jpg",
    summary:
      'Vanilla Bean Melting Moment Cookies With Caramel Filling might be a good recipe to expand your dessert repertoire. This lacto ovo vegetarian recipe serves 10 and costs <b>65 cents per serving</b>. One portion of this dish contains roughly <b>5g of protein</b>, <b>25g of fat</b>, and a total of <b>408 calories</b>. Not a lot of people made this recipe, and 8 would say it hit the spot. This recipe from Foodista requires cornstarch, butter, vanilla bean paste, and golden syrup. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. With a spoonacular <b>score of 19%</b>, this dish is not so super. Similar recipes include <a href="https://spoonacular.com/recipes/vanilla-melting-moments-sandwich-cookies-with-nutella-cream-cheese-filling-520141">Vanilla Melting Moments Sandwich Cookies with Nutella-Cream Cheese Filling</a>, <a href="https://spoonacular.com/recipes/vanilla-bean-cake-with-raspberry-filling-and-whipped-vanilla-bean-frosting-octopus-birthday-cake-488722">Vanilla Bean Cake with Raspberry Filling and Whipped Vanilla Bean Frosting {Octopus Birthday Cake}</a>, and <a href="https://spoonacular.com/recipes/orange-walnut-macarons-with-spiced-cream-cheese-and-cranberry-filling-guest-post-by-baking-a-moment-488873">Orange Walnut Macarons with Spiced Cream Cheese and Cranberry Filling {Guest Post by Baking A Moment}</a>.',
    cuisines: [],
    dishTypes: ["dessert"],
    diets: ["lacto ovo vegetarian"],
    occasions: [],
    instructions:
      "Preheat oven to 350 degrees\nPlace the butter, powdered sugar and vanilla in a bowl and beat with an electric mixer until light and fluffy.\nStir in the sifted flour and cornstarch until combined.\nPlace the mixture in a piping bag fitted with a fluted tip. Pipe 1in rounds onto a baking sheet linded with parchment paper, allowing room to spread.\nBake for 12 - 14 minutes or until golden. Cool on a tray (not on a rack, that will make it hard to pick up the delicate cookie).\nPlace all ingredients in a sauce pan and turn on very low heat.\nStir for 25-30 minutes or until thick and pale golden. Allow to cool. Eat with a big spoon.",
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Preheat oven to 350 degrees",
            ingredients: [],
            equipment: [
              {
                id: 404784,
                name: "oven",
                localizedName: "oven",
                image: "oven.jpg",
              },
            ],
          },
          {
            number: 2,
            step: "Place the butter, powdered sugar and vanilla in a bowl and beat with an electric mixer until light and fluffy.",
            ingredients: [
              {
                id: 19336,
                name: "powdered sugar",
                localizedName: "powdered sugar",
                image: "powdered-sugar.jpg",
              },
              {
                id: 1052050,
                name: "vanilla",
                localizedName: "vanilla",
                image: "vanilla.jpg",
              },
              {
                id: 1001,
                name: "butter",
                localizedName: "butter",
                image: "butter-sliced.jpg",
              },
            ],
            equipment: [
              {
                id: 404628,
                name: "hand mixer",
                localizedName: "hand mixer",
                image: "hand-mixer.png",
              },
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
          },
          {
            number: 3,
            step: "Stir in the sifted flour and cornstarch until combined.",
            ingredients: [
              {
                id: 20027,
                name: "corn starch",
                localizedName: "corn starch",
                image: "white-powder.jpg",
              },
              {
                id: 20081,
                name: "all purpose flour",
                localizedName: "all purpose flour",
                image: "flour.png",
              },
            ],
            equipment: [],
          },
          {
            number: 4,
            step: "Place the mixture in a piping bag fitted with a fluted tip. Pipe 1in rounds onto a baking sheet linded with parchment paper, allowing room to spread.",
            ingredients: [
              {
                id: 0,
                name: "spread",
                localizedName: "spread",
                image: "",
              },
            ],
            equipment: [
              {
                id: 404770,
                name: "baking paper",
                localizedName: "baking paper",
                image: "baking-paper.jpg",
              },
              {
                id: 404727,
                name: "baking sheet",
                localizedName: "baking sheet",
                image: "baking-sheet.jpg",
              },
            ],
          },
          {
            number: 5,
            step: "Bake for 12 - 14 minutes or until golden. Cool on a tray (not on a rack, that will make it hard to pick up the delicate cookie).",
            ingredients: [
              {
                id: 10118192,
                name: "cookies",
                localizedName: "cookies",
                image: "shortbread-cookies.jpg",
              },
            ],
            equipment: [
              {
                id: 404784,
                name: "oven",
                localizedName: "oven",
                image: "oven.jpg",
              },
            ],
            length: {
              number: 14,
              unit: "minutes",
            },
          },
          {
            number: 6,
            step: "Place all ingredients in a sauce pan and turn on very low heat.",
            ingredients: [
              {
                id: 0,
                name: "sauce",
                localizedName: "sauce",
                image: "",
              },
            ],
            equipment: [
              {
                id: 404669,
                name: "sauce pan",
                localizedName: "sauce pan",
                image: "sauce-pan.jpg",
              },
            ],
          },
          {
            number: 7,
            step: "Stir for 25-30 minutes or until thick and pale golden. Allow to cool. Eat with a big spoon.",
            ingredients: [],
            equipment: [],
            length: {
              number: 30,
              unit: "minutes",
            },
          },
        ],
      },
    ],
    originalId: null,
    spoonacularSourceUrl:
      "https://spoonacular.com/vanilla-bean-melting-moment-cookies-with-caramel-filling-664288",
  };

  return (
    <VStack
      bg={"white"}
      borderRadius={15}
      w={{ base: "360px", md: "760px" }}
      mx={"auto"}
      p={{ base: 5, md: 10 }}
      border={"1px solid lightgray"}
      align={"flex-start"}
    >
      <Box>
        <VStack
          justify={"flex-start"}
          align={"flex-start"}
          fontSize={{ base: "sm", md: "md" }}
        >
          <Image borderRadius={5} src={recipe.image} w="100%"></Image>
          <Heading mt={5} fontFamily={"'Courier Prime', monospace"}>
            {recipe.title}
          </Heading>
          <Text
            mb={2}
            lineHeight={1.8}
            mt={2}
            fontSize={{ base: "sm", md: "md" }}
            dangerouslySetInnerHTML={createMarkup(recipe.summary)}
          ></Text>
          <HStack mb={2}>
            <AiFillStar color="gold" size="24px" />
            <AiFillStar color="gold" size="24px" />
            <AiFillStar color="gold" size="24px" />
            <AiFillStar color="gold" size="24px" />
            <AiOutlineStar color="gold" size="24px" />
            <Text>({recipe.aggregateLikes} reviews)</Text>
          </HStack>
          <HStack justify={"center"} w={"100%"} my={5}>
            {recipe.preparationMinutes < 0 || (
              <>
                <VStack>
                  <Text fontWeight={"bold"}>Prep Time</Text>
                  <Text>
                    {Math.floor(recipe.preparationMinutes / 60) > 0
                      ? `${Math.floor(recipe.preparationMinutes / 60)} hr `
                      : ""}
                    {Math.floor(recipe.preparationMinutes % 60) > 0
                      ? `${Math.floor(recipe.preparationMinutes % 60)} min`
                      : ""}
                  </Text>
                </VStack>

                <Box
                  h={{ base: "60px", md: "60px" }}
                  borderLeft={"1px solid lightgray"}
                  mx={{ base: 1, md: 5 }}
                ></Box>
              </>
            )}
            {recipe.cookingMinutes < 0 || (
              <>
                <VStack>
                  <Text fontWeight={"bold"}>Cook Time</Text>
                  <Text>
                    {Math.floor(recipe.cookingMinutes / 60) > 0
                      ? `${Math.floor(recipe.cookingMinutes / 60)} hr `
                      : ""}
                    {Math.floor(recipe.cookingMinutes % 60) > 0
                      ? `${Math.floor(recipe.cookingMinutes % 60)} min`
                      : ""}
                  </Text>
                </VStack>
                <Box
                  h={{ base: "60px", md: "60px" }}
                  borderLeft={"1px solid lightgray"}
                  mx={{ base: 1, md: 5 }}
                ></Box>
              </>
            )}
            {recipe.readyInMinutes < 0 || (
              <VStack>
                <Text fontWeight={"bold"}>Ready in?</Text>
                <Text>
                  {Math.floor(recipe.readyInMinutes / 60) > 0
                    ? `${Math.floor(recipe.readyInMinutes / 60)} hr `
                    : ""}
                  {Math.floor(recipe.readyInMinutes % 60) > 0
                    ? `${Math.floor(recipe.readyInMinutes % 60)} min`
                    : ""}
                </Text>
              </VStack>
            )}
          </HStack>
          <HStack justify={"center"} w={"100%"} spacing={10}>
            {recipe.vegan ? (
              <VStack>
                <LuVegan size={"48px"} color={"green"} />
                <Text>Vegan</Text>
              </VStack>
            ) : recipe.vegetarian ? (
              <VStack>
                <LuVegan size={"48px"} color={"green"} />
                <Text>Vegetarian</Text>
              </VStack>
            ) : null}
            {!recipe.dairyFree && (
              <VStack>
                <GiCow size={"48px"} color={"gray"} />
                <Text>Dairy</Text>
              </VStack>
            )}
            {!recipe.glutenFree && (
              <VStack>
                <LuWheat size={"48px"} color={"gold"} />
                <Text>Gluten</Text>
              </VStack>
            )}
            {recipe.veryHealthy && (
              <VStack>
                <AiFillHeart size={"48px"} color={"red"} />
                <Text>Healthy</Text>
              </VStack>
            )}
          </HStack>
          <VStack align={"flex-start"}>
            <Text>
              <strong>Serving Size:</strong> {recipe.servings}
            </Text>
            <Text>
              <strong>Course:</strong>{" "}
              {recipe.occasions[0] ? recipe.occasions[0] : "-/"}
            </Text>
            <Text>
              <strong>Cuisine:</strong>{" "}
              {recipe.cuisines[0] ? recipe.cuisines[0] : "-/"}
            </Text>
          </VStack>
        </VStack>
        <HStack justify={"center"} mt={8}>
          <Button
            w={"40%"}
            bg={"red.400"}
            color={"white"}
            _hover={{ bg: "red.500" }}
          >
            Save
            <Box ml={3}>
              <AiOutlineSave size={"24px"} />
            </Box>
          </Button>
          <Button w={"40%"}>
            Comment
            <Box ml={3}>
              <AiOutlineComment size={"24px"} />
            </Box>
          </Button>
        </HStack>
      </Box>
      <Divider my={50} />
      <Heading fontFamily={"'Courier Prime', monospace"} textAlign={"left"}>
        Ingredients
      </Heading>
      <List spacing={4}>
        {recipe.extendedIngredients &&
          recipe.extendedIngredients.map((ingredient, index) => (
            <ListItem key={index} pl={5}>
              <ListIcon as={AiFillCaretRight} color={"red.400"} />{" "}
              {useMetric
                ? `${Math.floor(ingredient.measures.metric.amount)} ${
                    ingredient.measures.metric.unitShort
                  } ${ingredient.originalName}`
                : `${
                    ingredient.measures.us.amount % 1 === 0
                      ? ingredient.measures.us.amount
                      : ingredient.measures.us.amount.toFixed(2)
                  } ${ingredient.measures.us.unitShort} ${
                    ingredient.originalName
                  }`}
            </ListItem>
          ))}
      </List>
      <HStack>
        <Button mt={5} onClick={() => setUseMetric(!useMetric)}>
          {useMetric ? "In imperial" : "In metric"}
        </Button>
        <Button
          mt={5}
          bg={"red.400"}
          color={"white"}
          _hover={{ bg: "red.500" }}
        >
          Save to shopping list
        </Button>
      </HStack>
      <Heading
        fontFamily={"'Courier Prime', monospace"}
        textAlign={"left"}
        mt={50}
      >
        Instructions
      </Heading>
      <OrderedList spacing={5} pl={3}>
        {recipe.analyzedInstructions.map((instructions) =>
          instructions.steps.map((step, index) => (
            <ListItem key={index} pl={5}>
              {step.step}
            </ListItem>
          ))
        )}
      </OrderedList>
      <Divider my={50} />
      <Text fontSize={"sm"} fontWeight={"bold"} color={"gray.500"}>
        Credit: {recipe.sourceName}
      </Text>
      <Text
        as="a"
        color={"red.400"}
        target="_blank"
        href={recipe.sourceUrl}
        fontSize={"sm"}
      >
        {recipe.sourceUrl}
      </Text>
    </VStack>
  );
};

export default RecipeCard;
