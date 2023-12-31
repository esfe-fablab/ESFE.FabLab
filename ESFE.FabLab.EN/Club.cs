﻿using System;
using System.Collections.Generic;

namespace ESFE.FabLab.EN;

public partial class Club
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<SystemUser> SystemUsers { get; set; } = new List<SystemUser>();
}
