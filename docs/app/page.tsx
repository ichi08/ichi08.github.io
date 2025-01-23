import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-2">山田太郎</h1>
        <h2 className="text-2xl text-accent mb-2">データサイエンティスト</h2>
        <p className="text-xl italic">データで未来を描く</p>
      </header>

      <section id="profile" className="mb-16">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <Image
            src="../picture/face.png"
            alt="山田太郎"
            width={200}
            height={200}
            className="rounded-full order-1"
          />
          <div className="max-w-2xl order-2">
            <h3 className="text-2xl font-semibold mb-4">自己紹介</h3>
            <p>
              機械学習と統計分析を専門とするデータサイエンティストです。ビジネス課題を数理モデルで解決することが得意です。
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="mb-16">
        <h3 className="text-2xl font-semibold mb-4">スキル</h3>
        <ul className="list-disc pl-5 max-w-2xl mx-auto">
          <li>Python (NumPy, Pandas, Scikit-learn)</li>
          <li>R</li>
          <li>SQL</li>
          <li>機械学習 (回帰分析、分類、クラスタリング)</li>
          <li>統計分析</li>
          <li>データ可視化 (Matplotlib, Seaborn, ggplot2)</li>
        </ul>
      </section>

      <section id="achievements" className="mb-16">
        <h3 className="text-2xl font-semibold mb-4">実績</h3>
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="bg-accent p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-2">
              顧客離反予測モデルの構築
            </h4>
            <p>精度: 85%、コスト削減: 20%</p>
          </div>
          <div className="bg-accent p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-2">
              売上予測システムの開発
            </h4>
            <p>予測精度: MAPE 7%、在庫コスト削減: 15%</p>
          </div>
        </div>
      </section>

      <section id="education" className="mb-16">
        <h3 className="text-2xl font-semibold mb-4">学歴</h3>
        <div className="max-w-2xl mx-auto">
          <div className="mb-4">
            <h4 className="text-xl font-semibold">○○大学大学院</h4>
            <p>情報科学研究科 修士課程修了</p>
            <p className="text-sm text-gray-600">2018年4月 - 2020年3月</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">○○大学</h4>
            <p>理工学部 情報工学科 卒業</p>
            <p className="text-sm text-gray-600">2014年4月 - 2018年3月</p>
          </div>
        </div>
      </section>

      <section id="links" className="mb-16">
        <h3 className="text-2xl font-semibold mb-4">リンク</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <Link href="#" className="link-box block group">
            <h4 className="text-xl font-semibold text-accent group-hover:underline">
              ポートフォリオ
            </h4>
            <p className="mt-2 text-sm">
              過去のプロジェクトや成果物をご覧いただけます。
            </p>
          </Link>
          <Link href="#" className="link-box block group">
            <h4 className="text-xl font-semibold text-accent group-hover:underline">
              ブログ
            </h4>
            <p className="mt-2 text-sm">
              データサイエンスに関する記事や最新のトレンドを発信しています。
            </p>
          </Link>
          <Link href="#" className="link-box block group">
            <h4 className="text-xl font-semibold text-accent group-hover:underline">
              GitHub
            </h4>
            <p className="mt-2 text-sm">
              オープンソースプロジェクトやコード例をご覧いただけます。
            </p>
          </Link>
          <Link href="#" className="link-box block group">
            <h4 className="text-xl font-semibold text-accent group-hover:underline">
              LinkedIn
            </h4>
            <p className="mt-2 text-sm">
              職歴やスキルの詳細、推薦文をご覧いただけます。
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
