# 🛍️ React E-Commerce (TypeScript + Vite + Bootstrap)

A professional and fully responsive **E-Commerce web app** built using:
- **React 19**
- **TypeScript**
- **Vite**
- **Bootstrap 5.3**
- **Redux Toolkit**
- **React Query**
- **Axios**
- **React Hook Form + Zod**

---

## 🚀 Features

✅ **Authentication Flow**
- Login via token API:  
  `https://notes-mrp9.onrender.com/signin`
- Protected routes using `ProtectedRoute` component  
- Token stored securely and passed via Axios interceptors

✅ **Product Management**
- Fetch products from:  
  `https://68e43ee28e116898997b5bf8.mockapi.io/product`
- Product grid, details, and cart management
- Loading **Bootstrap Spinner** during fetches

✅ **Responsive Design**
- 100% responsive using only **Bootstrap Grid System**
- No Tailwind or custom breakpoints
- Hard CSS for additional styles (in `/styles/main.css`)

✅ **Reusable Components**
- `Navbar`  
- `Spinner` (for all loading states)  
- `ProtectedRoute`  
- `ProductCard`  
- `HelmetWrapper` (for SEO)

✅ **Modern Stack**
- **React Query** for fetching + caching  
- **Redux Toolkit** for global state  
- **Zod + React Hook Form** for validation  
- **Axios Instance** for API abstraction  

---

## 🧱 Project Structure

src/
├── app/
│ ├── store.ts
│ ├── axiosInstance.ts
├── components/
│ ├── common/
│ │ ├── Navbar.tsx
│ │ ├── Spinner.tsx
│ │ ├── ProtectedRoute.tsx
│ │ └── HelmetWrapper.tsx
│ └── product/
│ └── ProductCard.tsx
├── features/
│ ├── auth/
│ ├── home/
│ ├── product/
│ └── order/
├── routes/
│ └── AppRoutes.tsx
├── styles/
│ └── main.css
└── main.tsx



2️⃣ Install dependencies

npm install


If peer-dependency warnings appear, use:

npm install --legacy-peer-deps


3️⃣ Run the project

npm run dev

The app will start at:
👉 http://localhost:5173


🧠 Development Notes

Use <Spinner /> wherever data is loading or submitting.

Use Bootstrap’s grid (container, row, col) for layout.

Avoid using any CSS frameworks other than Bootstrap.

Use React Query hooks (useQuery, useMutation) for API data.

Keep Redux slices small and modular.

🧩 APIs

Feature	Method	Endpoint
Products	GET	https://68e43ee28e116898997b5bf8.mockapi.io/product
Login	   POST	https://notes-mrp9.onrender.com/signin


🧠 Tech Stack Summary

Tool	Purpose
React 19 + TypeScript	Front-end Framework
Vite	Fast build tool
Redux Toolkit	Global State Management
React Query	Data Fetching & Caching
Axios	HTTP Requests
Bootstrap 5.3	Styling & Layout
React Hook Form + Zod	Forms & Validation

🪄 Spinner Example

import Spinner from "./components/common/Spinner";

function ProductList() {
  const { data, isLoading } = useQuery(["products"], fetchProducts);

  if (isLoading) return <Spinner />;

  return (
    <div className="row">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}


👩‍💻 Author

Haidy Design
Frontend Engineer & UI/UX Developer

📜 License

MIT License © 2025