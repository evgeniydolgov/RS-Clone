import React from 'react';
import './styles.css';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { Layout } from './components/Layout';
import { QuizPage } from './components/QuizPage';
import { AuthorizePage } from './components/AuthorizePage';
import { SortCuisinesRecipesByArea } from './components/SortCuisinesRecipesByArea';
import { RecipeCard } from './components/RecipeCard';
import { MemoPage } from './components/MemoPage';
import { ShopPage } from './components/ShopPage';
import { PlayerList } from './components/PlayerList';

export const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="quiz" element={<QuizPage />} />
        <Route path="memo" element={<MemoPage />} />
        <Route path="authorize" element={<AuthorizePage />} />
        <Route path="recipe" element={<RecipeCard />} />
        <Route path="recipeCuisine" element={<SortCuisinesRecipesByArea />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="playerList" element={<PlayerList />} />
      </Route>
    </Routes>
    {/* <Header />
      <MainPage />
      <RecipePage />
      <RecipeCard />
      <Footer /> */}
  </>
);
