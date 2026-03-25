import json
from django.http import JsonResponse
from django.views.decorators.http import require_GET
from .models import Product, Category



def product_to_dict(p):
    return {
        "id":          p.id,
        "name":        p.name,
        "price":       p.price,
        "description": p.description,
        "count":       p.count,
        "is_active":   p.is_active,
        "category_id": p.category_id,
        "category":    p.category.name,
    }

def category_to_dict(c):
    return {
        "id":   c.id,
        "name": c.name,
    }



@require_GET
def product_list(request):
    """GET /api/products/"""
    products = Product.objects.select_related('category').all()
    data = [product_to_dict(p) for p in products]
    return JsonResponse(data, safe=False)


@require_GET
def product_detail(request, id):
    """GET /api/products/<id>/"""
    try:
        product = Product.objects.select_related('category').get(pk=id)
        return JsonResponse(product_to_dict(product))
    except Product.DoesNotExist:
        return JsonResponse({"error": "Product not found"}, status=404)



@require_GET
def category_list(request):
    """GET /api/categories/"""
    categories = Category.objects.all()
    data = [category_to_dict(c) for c in categories]
    return JsonResponse(data, safe=False)


@require_GET
def category_detail(request, id):
    """GET /api/categories/<id>/"""
    try:
        category = Category.objects.get(pk=id)
        return JsonResponse(category_to_dict(category))
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)


@require_GET
def category_products(request, id):
    """GET /api/categories/<id>/products/"""
    try:
        category = Category.objects.get(pk=id)
        products = Product.objects.select_related('category').filter(category=category)
        data = [product_to_dict(p) for p in products]
        return JsonResponse(data, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)