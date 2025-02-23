import { Link, Meta, Title } from "react";

export default function Page() {
  return (
    <>
      {/* Динамический заголовок страницы */}
      <Title>Страница о React 19</Title>

      {/* Добавление мета-тегов */}
      <Meta
        name="description"
        content="Обновленный React 19 с улучшенными мета-тегами!"
      />
      <Meta property="og:title" content="Новое в React 19" />

      {/* Добавление фавикона */}
      <Link rel="icon" href="/favicon.ico" />

      <h1>Добро пожаловать в React 19!</h1>
      <p>Теперь можно изменять метаданные прямо в компонентах.</p>
    </>
  );
}
