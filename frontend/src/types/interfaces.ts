interface BasicRecipe {
  id: number;
  title: string;
  image: string;
}

interface Ingredient {}

interface ApiResponse {
  recipes: BasicRecipe[];
}

interface FullRecipe {
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  dairyFree?: boolean;
  veryHealthy?: boolean;
  cheap?: boolean;
  veryPopular?: boolean;
  sustainable?: boolean;
  lowFodmap?: boolean;
  weightWatcherSmartPoints?: number;
  gaps?: string;
  preparationMinutes?: number;
  cookingMinutes?: number;
  aggregateLikes?: number;
  healthScore?: number;
  creditsText?: string;
  license?: string;
  sourceName?: string;
  pricePerServing?: number;
  extendedIngredients?: {
    id?: number;
    aisle?: string;
    image?: string;
    consistency?: string;
    name?: string;
    nameClean?: string;
    original?: string;
    originalName?: string;
    amount?: number;
    unit?: string;
    meta?: string[];
    measures?: {
      us?: {
        amount?: number;
        unitShort?: string;
        unitLong?: string;
      };
      metric?: {
        amount?: number;
        unitShort?: string;
        unitLong?: string;
      };
    };
  }[];
  id?: number;
  title?: string;
  readyInMinutes?: number;
  servings?: number;
  sourceUrl?: string;
  image?: string;
  imageType?: string;
  summary?: string;
  cuisines?: string[];
  dishTypes?: string[];
  diets?: string[];
  occasions?: string[];
  instructions?: string;
  analyzedInstructions?: {
    name?: string;
    steps?: {
      number?: number;
      step?: string;
      ingredients?: {
        id?: number;
        name?: string;
        localizedName?: string;
        image?: string;
      }[];
      equipment?: {
        id?: number;
        name?: string;
        localizedName?: string;
        image?: string;
      }[];
      length?: {
        number?: number;
        unit?: string;
      };
    }[];
  }[];
  originalId?: number | null;
  spoonacularSourceUrl?: string;
}

interface Ingredient {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: {
    us: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
    metric: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
  };
}

interface AnalyzedInstructionStepIngredient {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

interface AnalyzedInstructionStepEquipment {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

interface AnalyzedInstructionStep {
  number: number;
  step: string;
  ingredients: AnalyzedInstructionStepIngredient[];
  equipment: AnalyzedInstructionStepEquipment[];
  length?: {
    number: number;
    unit: string;
  };
}

interface AnalyzedInstruction {
  name: string;
  steps: AnalyzedInstructionStep[];
}
