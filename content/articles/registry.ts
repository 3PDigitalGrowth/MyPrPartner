import type { ArticleDoc } from "./types";
import { doc as highStakesFormula } from "./melissa/high-stakes-comms-formula";
import { doc as aiErasedDatabase } from "./melissa/ai-erased-database-and-lied";
import { doc as issueOrCrisis } from "./melissa/issue-or-crisis-why-the-label-decides-the-response";
import { doc as emotionLogic } from "./melissa/you-cannot-beat-emotion-with-logic";
import { doc as hopeStrategy } from "./melissa/hope-is-not-a-strategy-crisis-response-penalty";
import { doc as calmestPerson } from "./melissa/calmest-person-in-the-room";
import { doc as crisisOnion } from "./melissa/crisis-is-an-onion-layered-storytelling";
import { doc as mapleLeaf } from "./melissa/maple-leaf-foods-from-tragedy-to-trust";
import { doc as fourLevels } from "./melissa/four-levels-of-safety-crisis-leader";
import { doc as angerVeil } from "./melissa/anger-is-a-veil-emotion";
import { doc as crisisTraining } from "./lyall/crisis-management-training";

/**
 * Slug -> body document. Card metadata for the same slugs lives in seed.ts.
 * Add a new article by dropping a content file in ./melissa or ./lyall and
 * listing it here and in seed.ts.
 */
export const articleRegistry: Record<string, ArticleDoc> = {
  [crisisTraining.slug]: crisisTraining,
  [highStakesFormula.slug]: highStakesFormula,
  [aiErasedDatabase.slug]: aiErasedDatabase,
  [issueOrCrisis.slug]: issueOrCrisis,
  [emotionLogic.slug]: emotionLogic,
  [hopeStrategy.slug]: hopeStrategy,
  [calmestPerson.slug]: calmestPerson,
  [crisisOnion.slug]: crisisOnion,
  [mapleLeaf.slug]: mapleLeaf,
  [fourLevels.slug]: fourLevels,
  [angerVeil.slug]: angerVeil,
};

export const registeredSlugs = Object.keys(articleRegistry);
