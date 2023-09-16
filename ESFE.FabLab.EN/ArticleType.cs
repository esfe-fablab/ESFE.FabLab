using System;
using System.Collections.Generic;

namespace ESFE.FabLab.EN;

public partial class ArticleType
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<Article> Articles { get; set; } = new List<Article>();
}
