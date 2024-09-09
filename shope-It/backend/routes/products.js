import express from "express";
import {
  deleteProduct,
  getProductDetails,
  getProducts,
  newProduct,
  updateProduct,
  createProductReview,
  getProductReviews,
  deleteReview,
} from "../controllers/productContollers.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";
import { authorizeRoles } from "../middlewares/auth.js";

const router = express.Router();
router.route("/products").get(getProducts);
router
  .route("/admin/products")
  .post(isAuthenticatedUser, authorizeRoles("admin"), newProduct); // post : is used to send data to a server to create or update a resource.

router.route("/products/:id").get(getProductDetails);

router
  .route("/admin/products/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct);
router
  .route("/admin/products/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

router
  .route("/reviews")
  .get(isAuthenticatedUser, getProductReviews)
  .put(isAuthenticatedUser, createProductReview);

router
  .route("/admin/reviews")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteReview);

export default router;
/*
const router=express.Router();
export default router; */
